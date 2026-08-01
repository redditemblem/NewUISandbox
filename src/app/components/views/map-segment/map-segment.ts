import { initDevtools } from '@pixi/devtools';
import { Component, inject, input } from '@angular/core';
import { IMapSegment } from '../../../data/interfaces/map/map-segment';
import { Application, Assets, ColorMatrixFilter, Container, FederatedPointerEvent, FillGradient, Filter, Graphics, GraphicsPath, ImageLike, NineSliceSprite, Rectangle, Sprite, Text, Texture, TextureSource } from 'pixi.js';
import { GifSource, GifSprite } from 'pixi.js/gif';
import { GlowFilter } from 'pixi-filters';
import { TeamDataService } from '../../../services/team-data-service';
import { IMapConstants } from '../../../data/interfaces/map/map-constants';
import { ICoordinate } from '../../../data/interfaces/map/coordinate';
import { IUnitStatus } from '../../../data/interfaces/unit/unit-status';
import { IStatusCondition } from '../../../data/interfaces/system/status-condition';
import { ITag } from '../../../data/interfaces/system/tag';
import { IUnit } from '../../../data/interfaces/unit/unit';
import { StringDictionary } from '../../../data/interfaces/common/dictionaries';
import { IAffiliation } from '../../../data/interfaces/system/affiliation';
import { ITile } from '../../../data/interfaces/map/tile';
import { MapEventService } from '../../../services/map-event-service';

@Component({
  selector: 'map-segment',
  imports: [],
  template: `<div id="pixiContainer"></div>`,
  styles: `
    #pixiContainer {
      height: calc(100vh - 56px);
      width: 100%;
      overflow: auto;
    }
  `,
})
export class MapSegment {
  currentSegmentTitle = input.required<string>();

  private pixiApp : Application;
  private segmentContainers : StringDictionary<SegmentContainer>;
  private paintContainers: StringDictionary<PaintContainer>;
  private activeSegment: SegmentContainer | undefined;
  private inPaintMode: boolean = false;

  constructor(private teamDataService: TeamDataService, private eventService: MapEventService) {
    this.teamDataService = inject(TeamDataService);
    this.eventService = inject(MapEventService);
    
    this.pixiApp = new Application();
    this.segmentContainers = {};
    this.paintContainers = {};

    //Subscribe to external events
    this.eventService.downloadMapAsImage
      .subscribe(() => this.downloadMapAsImage());
    this.eventService.updatePaintMode
      .subscribe((inPaintMode: boolean) => this.updatePaintMode(inPaintMode));
    this.eventService.clearPaintContainer
      .subscribe(() => this.clearPaintContainer());
    this.eventService.undoLastPaintContainerLine
      .subscribe(() => this.undoLastPaintContainerLine());
  }

  async ngOnInit() {
    let pixiContainer = document.getElementById("pixiContainer");
    if(pixiContainer === null) {
      console.log("Failed to find container for PixiJS canvas");
      return;
    }

    //Set global preferences
    TextureSource.defaultOptions.scaleMode = 'nearest'; //prevent sprites from rendering blurry
    await Assets.setPreferences({
      crossOrigin: '*'
    });

    await this.loadBundledAssets();
    await this.initializePixiApp(pixiContainer);
    await this.createSegmentContainers();
    await this.createPaintContainers(this.eventService);

    this.updateActiveSegment();
  }

  async ngOnChanges() {
    if(this.pixiApp.stage.children.length === 0)
      return;

    this.updateActiveSegment();
  }

  private async loadBundledAssets() {
    //Unit number sprites
    Assets.addBundle('unit-numbers', [
      { alias: '0', src: 'img/numbers/num_0.png' },
      { alias: '1', src: 'img/numbers/num_1.png' },
      { alias: '2', src: 'img/numbers/num_2.png' },
      { alias: '3', src: 'img/numbers/num_3.png' },
      { alias: '4', src: 'img/numbers/num_4.png' },
      { alias: '5', src: 'img/numbers/num_5.png' },
      { alias: '6', src: 'img/numbers/num_6.png' },
      { alias: '7', src: 'img/numbers/num_7.png' },
      { alias: '8', src: 'img/numbers/num_8.png' },
      { alias: '9', src: 'img/numbers/num_9.png' }
    ]);

    Assets.addBundle('assorted', [
      { alias: 'tile_cursor', src: 'img/tile_cursor.png' },
      { alias: 'status_heart', src: 'img/status_heart.png' }
    ]);

    await Assets.loadBundle(['unit-numbers', 'assorted']);
  }

  /** Initializes `this.pixiApp` and appends its resulting canvas as a child of the `appContainer` element. 
   * @param appContainer - The HTML element that will contain the Pixi.JS canvas
  */
  private async initializePixiApp(appContainer: HTMLElement) {
    await this.pixiApp.init({ 
      backgroundAlpha: 0
    });
    this.pixiApp.canvas.id = 'pixiCanvas';

    appContainer.appendChild(this.pixiApp.canvas);
  }

  private async createSegmentContainers() {
    const segments: IMapSegment[] = this.teamDataService.mapData().map?.segments ?? [];

    //Create segments in parallel
    await Promise.all(segments.map(async(segment) => {
      const container = new SegmentContainer(this.teamDataService, this.eventService, segment);
      await container.init();

      this.segmentContainers[segment.title] = container;

      //Add segment to stage and make it invisible
      container.visible = false;
      this.pixiApp.stage.addChild(container);
    }));
  }

  private async createPaintContainers(eventService: MapEventService) {

    //In parallel, create a paint container per segment
    await Promise.all(Object.entries(this.segmentContainers).map(async([name, container]) => {
      const paintContainer = new PaintContainer(eventService, name, container.segment.heightInPixels, container.segment.widthInPixels);

      this.paintContainers[name] = paintContainer;
      this.pixiApp.stage.addChild(paintContainer);
    }));
  }

  private updateActiveSegment() {
    const container: SegmentContainer = this.segmentContainers[this.currentSegmentTitle()];
    if(container === undefined) return;

    //If there is a current active segment, inactivate it first
    if(this.activeSegment !== undefined) {
      this.activeSegment.visible = false;
      this.activeSegment.disableInteraction();
    }
    if(this.inPaintMode) {
      const paintContainer = this.paintContainers[this.activeSegment?.label ?? ''];
      paintContainer?.disableInteraction();
    }

    //Update the active segment
    //updatePaintMode() takes care of enabling the paint container if needed
    this.activeSegment = container;
    this.activeSegment.visible = true;
    this.updatePaintMode(this.inPaintMode);

    //Resize canvas to this new segment
    this.pixiApp.renderer.resize(
      container.segment.widthInPixels,
      container.segment.heightInPixels
    );
  }

  /** Triggers the browser to download the current canvas stage as a PNG */
  private async downloadMapAsImage() {
    const blob: ImageLike = await this.pixiApp.renderer.extract.image({
      target: this.pixiApp.stage,
      format: 'png'
    });

    const downloadLink = document.createElement("a");
    downloadLink.href = blob.src;
    downloadLink.download = `${this.currentSegmentTitle()}.png`;
    downloadLink.click();
    downloadLink.remove();
  }

  private async updatePaintMode(inPaintMode: boolean) {
    this.inPaintMode = inPaintMode;

    //Fetch the paint container linked to the active map segment
    const paintContainer = this.paintContainers[this.currentSegmentTitle()];
    
    if(inPaintMode) {
      this.activeSegment?.disableInteraction();
      paintContainer?.enableInteraction();
    }
    else {
      this.activeSegment?.enableInteraction();
      paintContainer?.disableInteraction();
    }
  }

  private async clearPaintContainer() {
    if(!this.inPaintMode) return;

    const paintContainer = this.paintContainers[this.currentSegmentTitle()];
    paintContainer?.clearGraphicsBuffer();
  }

  private async undoLastPaintContainerLine() {
    if(!this.inPaintMode) return;

    const paintContainer = this.paintContainers[this.currentSegmentTitle()];
    paintContainer?.destroyLatestGraphic();
  }
}

/** Static functions for loading sprite resources */
export abstract class SpriteLoader {

  public static async getExternalSprite(alias: string, assetUrl: string) : Promise<Sprite | undefined> {
    const img: Texture = await this.loadExternalTextureAsset(alias, assetUrl);
    if(img === undefined) return undefined;

    return new Sprite(img);
  }

  public static async getExternalGifSprite(alias: string, assetUrl: string) : Promise<GifSprite | undefined> {
    const gif: GifSource = await this.loadExternalGifAsset(alias, assetUrl);
    if(gif === undefined) return undefined;

    return new GifSprite(gif);
  }

  private static async loadExternalTextureAsset(alias: string, assetUrl: string) : Promise<Texture> {
    return Assets.load<Texture>({
      alias: alias,
      src: assetUrl,
      parser: 'loadTextures'
    });
  }

  private static async loadExternalGifAsset(alias: string, assetUrl: string) : Promise<GifSource> {
    return Assets.load<GifSource>({
      alias: alias,
      src: assetUrl
    });
  }
}

/** Static functions for retrieving common sprite filters */
export abstract class SpriteFilters {

  //Use a singleton model so we don't keep recreating filters
  private static grayscaleFilter : ColorMatrixFilter;
  private static brightFilter : ColorMatrixFilter;
  private static glowFilters : StringDictionary<GlowFilter> = {};
  private static unitPinnedFilter : GlowFilter;

  public static getGrayscaleFilter() : ColorMatrixFilter {
    if(this.grayscaleFilter !== undefined)
      return this.grayscaleFilter;

    this.grayscaleFilter = new ColorMatrixFilter();
    this.grayscaleFilter.blackAndWhite(true);

    return this.grayscaleFilter;
  }

  public static getBrightFilter() : ColorMatrixFilter {
    if(this.brightFilter !== undefined)
      return this.brightFilter;

    this.brightFilter = new ColorMatrixFilter();
    this.brightFilter.brightness(1.6, true);

    return this.brightFilter;
  }

  public static getUnitPinnedFilter() : GlowFilter {
    if(this.unitPinnedFilter !== undefined)
      return this.unitPinnedFilter;

    this.unitPinnedFilter = new GlowFilter({
      color: '#ffffff',
      distance: 10,
      outerStrength: 4,
      alpha: 0.5
    });

    return this.unitPinnedFilter;
  }

  /**
   * @param colorHex - A color code in hex format (ex. '#ffffff')
   */
  public static getGlowFilter(colorHex: string) : GlowFilter {
    if(this.glowFilters[colorHex] !== undefined)
      return this.glowFilters[colorHex];

    const filter = new GlowFilter({
      color: colorHex,
      distance: 10,
      outerStrength: 4,
      alpha: 0.6
    });
    this.glowFilters[colorHex] = filter;

    return filter;
  }
}

export class PaintContainer extends Container {

  private eventService: MapEventService;

  private userIsDrawing: boolean = false;
  private currentDrawing: Graphics | undefined;
  private graphicsBuffer: Graphics[] = [];

  constructor(eventService: MapEventService, label: string, height: number, width: number) {
    super(); //call the parent Container() constructor

    this.eventService = eventService;
    this.label = label;
    this.disableInteraction();
    this.zIndex = 10000;

    //Without a child, the container collapses to 0 height and width
    const rect = new Graphics()
      .rect(0, 0, width, height)
      .fill({
        color: '#ffffff',
        alpha: 0
      });
    this.addChild(rect);

    this.on('pointerdown', this.PaintContainer_PointerDown);
    this.on('pointermove', this.PaintContainer_PointerMove);
    this.on('pointerup', this.PaintContainer_PointerUp_PointerLeave);
    this.on('pointerleave', this.PaintContainer_PointerUp_PointerLeave)
  }

  /** Makes the container visible and enables interaction. */
  public enableInteraction() {
    this.visible = true;
    this.interactive = true;
    this.interactiveChildren = true;
  }

  /** Makes the container invisible and disables interaction. */
  public disableInteraction() {
    this.visible = false;
    this.interactive = false;
    this.interactiveChildren = false;
  }

  // #region Event Handlers

  public async clearGraphicsBuffer() {
    //Destroy all graphics in parallel
    await Promise.all(this.graphicsBuffer.map(async(graphic) => {
      graphic?.destroy();
    }));

    //Flush the buffer
    this.graphicsBuffer = [];
  }

  public async destroyLatestGraphic() {
    const latestGraphic = this.graphicsBuffer.pop();
    latestGraphic?.destroy();
  }

  private PaintContainer_PointerDown(event: FederatedPointerEvent) {
    this.userIsDrawing = true;

    const newLine = new Graphics();
    newLine.moveTo(event.screen.x, event.screen.y);

    this.currentDrawing = newLine;
    this.graphicsBuffer.push(newLine);
    this.addChild(newLine);
  }

  private PaintContainer_PointerMove(event: FederatedPointerEvent) {
    if(!this.userIsDrawing) return;
    this.currentDrawing?.lineTo(event.screen.x, event.screen.y)
      .stroke({
        color: this.eventService.drawingPenColor(),
        width: this.eventService.drawingPenWidth(),
        cap: 'round',
        join: 'round'
      });
  }

  private PaintContainer_PointerUp_PointerLeave(event: FederatedPointerEvent) {
    this.userIsDrawing = false;
  }

  // #endregion Event Handlers
}

export class SegmentContainer extends Container {
  private teamDataService: TeamDataService;
  private eventService: MapEventService;
  private constants: IMapConstants | undefined;

  private readonly tileDimensions: number;
  private readonly tileDimensionCenter: number;
  private readonly hasTopLeftHeaders: boolean;
  private readonly hasBottomRightHeaders: boolean;

  public readonly segment: IMapSegment;
  private tileContainers : StringDictionary<TileContainer>;
  private unitContainers : StringDictionary<UnitContainer>;

  private tileCursor: NineSliceSprite;
  private cursorIncrementBy: number = 2;
  private currTileXY: [number, number] = [0, 0];

  constructor(teamDataService: TeamDataService, eventService: MapEventService, segment: IMapSegment) {
    super(); //call the parent Container() constructor

    this.teamDataService = teamDataService;
    this.eventService = eventService;
    this.constants = this.teamDataService.getMapConstants();

    this.tileDimensions = (this.constants?.tileSize ?? 16);
    this.tileDimensionCenter = Math.floor(this.tileDimensions / 2);
    this.hasTopLeftHeaders = (this.constants?.hasHeaderTopLeft ?? false);
    this.hasBottomRightHeaders = (this.constants?.hasHeaderBottomRight ?? false);

    this.segment = segment;
    this.tileContainers = {};
    this.unitContainers = {};

    //Set this container's base attributes
    this.label = this.segment.title;
    this.height = this.segment.heightInPixels;
    this.width = this.segment.widthInPixels;

    //Create tile cursor and "breath" interval
    this.tileCursor = this.createTileCursorSprite();

    //Subscribe to events
    this.eventService.pinUnit
      .subscribe((name: string) => this.pinUnit(name));

    this.eventService.unpinUnit
      .subscribe((name: string) => this.unpinUnit(name));

    this.on('pointermove', this.SegmentContainer_PointerMove_PointerTap);
    this.on('pointertap', this.SegmentContainer_PointerMove_PointerTap);

    //Needs to be last, as it also hides the tile cursor
    this.disableInteraction();
  }

  public async init() {

    //Load the segment's background
    const assetAlias = `segment ${this.segment.title}`;
    const segmentBackground = await SpriteLoader.getExternalSprite(assetAlias, this.segment.imageURL);
    if(segmentBackground !== undefined)
      this.addChild(segmentBackground);

    const tileDimensions: number = (this.constants?.tileSize ?? 16); 

    //Load all tiles in parallel
    Promise.all(this.segment.tiles.map(async(row) => {
      Promise.all(row.map(async(tile) =>
      {
        const tileContainer : TileContainer = new TileContainer(this.teamDataService, this.eventService, tile);
        tileContainer.init()
          .then(() => {
            this.addChild(tileContainer);

            const coordinate: ICoordinate = tile.coordinate;
            tileContainer.position = {
              x: tileDimensions * (coordinate.x - this.segment.horizontalTileRangeWithinMap.start.value + (this.constants?.hasHeaderTopLeft ? 1 : 0)), 
              y: tileDimensions * ((coordinate.y - 1) + (this.constants?.hasHeaderTopLeft ? 1 : 0))
            };

            this.addTileItemsToDictionaries(tileContainer);
          });
      }))
    }));
  }

  private addTileItemsToDictionaries(container: TileContainer) {
    if(container === undefined) return;
    this.tileContainers[container.tile.coordinate.asText] = container;

    const unitContainer: UnitContainer | undefined = container.unitContainer;
    const pairedUnitContainer: UnitContainer | undefined = container.pairupUnitContainer;
    
    if(unitContainer !== undefined)
      this.unitContainers[unitContainer.unitName] = unitContainer;
    if(pairedUnitContainer !== undefined)
      this.unitContainers[pairedUnitContainer.unitName] = pairedUnitContainer;
  }

  private createTileCursorSprite(): NineSliceSprite {
    const texture = Texture.from('tile_cursor');

    const sprite = new NineSliceSprite({
      texture: texture,
      leftWidth: 7,
      topHeight: 7,
      rightWidth: 7,
      bottomHeight: 7,
      height: this.tileDimensions+2,
      width: this.tileDimensions+2
    });

    sprite.label = 'Cursor';
    sprite.anchor.set(0.5); //manipulate relative to center
    sprite.zIndex = 10000;
    sprite.interactive = false;
    sprite.interactiveChildren = false;

    //Set up animation interval
    setInterval(() => {
      sprite.height += this.cursorIncrementBy;
      sprite.width += this.cursorIncrementBy;

      //Invert increment at bounds
      if(sprite.height >= this.tileDimensions+6) this.cursorIncrementBy = -2;
      else if(sprite.height <= this.tileDimensions+2) this.cursorIncrementBy = 2;
    }, 200);

    this.addChild(sprite);
    return sprite;
  }

  private updateCurrentTile(x: number, y: number) {
    //Offset x by the segment's horizontal displacement
    x += this.segment.horizontalTileRangeWithinMap.start.value - 1;

    //If this is already the current tile, don't send another event
    if(x === this.currTileXY[0] && y === this.currTileXY[1])
      return;

    this.currTileXY = [x, y];
    this.eventService.updateCurrentTileCoordinates(x, y);
  }

  /** Enables interaction. Does not affect visibility. */
  public enableInteraction() {
    this.interactive = true;
    this.interactiveChildren = true;
  }

  /** Disables interaction. Does not affect visibility. */
  public disableInteraction() {
    this.interactive = false;
    this.interactiveChildren = false;
    this.tileCursor.visible = false;
  }

  // #region Event Handling

  private pinUnit(unitName: string) {
    const container: UnitContainer = this.unitContainers[unitName];
    if(container === undefined) return;

    container.pinUnit();
    
    const unit: IUnit | undefined = container.unit;
    if(unit === undefined) return;

    this.updateUnitRangeTiles(unit, 1);
  }

  private unpinUnit(unitName: string) {
    const container: UnitContainer = this.unitContainers[unitName];
    if(container === undefined) return;

    container.unpinUnit();

    const unit: IUnit | undefined = container.unit;
    if(unit === undefined) return;

    this.updateUnitRangeTiles(unit, -1);
  }

  private updateUnitRangeTiles(unit: IUnit, incrementBy: number) {
    const movRange: ICoordinate[] = unit.ranges.movement ?? [];
    Promise.all(movRange.map(async(coord) => {
      const tile: TileContainer = this.tileContainers[coord.asText];
      tile?.updateMoveRangeCount(incrementBy);
    }));

    const atkRange: ICoordinate[] = unit.ranges.attack ?? [];
    Promise.all(atkRange.map(async(coord) => {
      const tile: TileContainer = this.tileContainers[coord.asText];
      tile?.updateAttackRangeCount(incrementBy);
    }));

    const utilRange: ICoordinate[] = unit.ranges.utility ?? [];
    Promise.all(utilRange.map(async(coord) => {
      const tile: TileContainer = this.tileContainers[coord.asText];
      tile?.updateUtilityRangeCount(incrementBy);
    }));
  }

  private SegmentContainer_PointerMove_PointerTap(event: FederatedPointerEvent) {
    const xNumTiles = Math.floor(event.screen.x / this.tileDimensions);
    const yNumTiles = Math.floor(event.screen.y / this.tileDimensions);

    //Hide cursor on headers/footers
    if( (this.hasTopLeftHeaders && (xNumTiles < 1 || yNumTiles < 1))
     || (this.hasBottomRightHeaders && (xNumTiles > this.segment.widthInTiles || yNumTiles > this.segment.heightInTiles))) 
    {
      this.tileCursor.visible = false;
      return;
    }

    this.tileCursor.visible = true;
    this.tileCursor.x = xNumTiles * this.tileDimensions + this.tileDimensionCenter;
    this.tileCursor.y = yNumTiles * this.tileDimensions + this.tileDimensionCenter;
    this.updateCurrentTile(xNumTiles, yNumTiles);
  }

  // #endregion Event Handling
}

export class TileContainer extends Container {

  private movementRangeCount: number = 0;
  private attackRangeCount: number = 0;
  private utilityRangeCount: number = 0;

  private readonly movRangeColor: string = '#5cb4ef';
  private readonly atkRangeColor: string = '#d81b62';
  private readonly utilRangeColor: string = '#9dff00';

  private teamDataService: TeamDataService;
  private eventService: MapEventService;

  public tile : ITile;
  public unitContainer : UnitContainer | undefined;
  public pairupUnitContainer: UnitContainer | undefined;
  private backgroundTint: Graphics | undefined;

  constructor(teamDataService: TeamDataService, eventService: MapEventService, tile: ITile) {
    super(); //call the parent Container() constructor

    this.teamDataService = teamDataService;
    this.eventService = eventService;
    this.tile = tile;

    //Set this container's base attributes
    this.label = this.tile.coordinate.asText;
    this.interactive = false;
    this.interactiveChildren = false;
  }

  public async init() {
    
    const constants: IMapConstants | undefined = this.teamDataService.getMapConstants();
    const tileDimensions: number = (constants?.tileSize ?? 16);

    //Add a rectangle graphic for showing ranges
    this.backgroundTint = new Graphics()
      .rect(0, 0, tileDimensions, tileDimensions)
      .fill({
        color: '#ffffff',
        alpha: 0.5
      });
    this.backgroundTint.visible = false; //hide by default
    this.addChild(this.backgroundTint);

    const occupyingUnitName: string = this.tile.unitData.occupyingUnitName ?? "";
    const pairUpUnitName: string = this.tile.unitData.pairedUnitName ?? "";

    //Create unit containers for each unit on this tile
    if(this.tile.unitData.isUnitAnchor && occupyingUnitName.length > 0) {

      this.interactiveChildren = true;
      let units: UnitContainer[] = [];

      this.unitContainer = new UnitContainer(this.teamDataService, this.eventService, occupyingUnitName, true);
      units.push(this.unitContainer);

      if(pairUpUnitName.length > 0) {
        this.pairupUnitContainer = new UnitContainer(this.teamDataService, this.eventService, pairUpUnitName, false);
        units.push(this.pairupUnitContainer);
      }

      //Initialize unit containers in parallel
      Promise.all(units.map(async(unit) => {
        unit.init();
        this.addChild(unit);
      }))
      .then(() => {
        //Position children?
      });
    }
  }

  public updateMoveRangeCount(incrementBy: number) {
    this.movementRangeCount += incrementBy;
    this.updateBackgroundTint();
  }

  public updateAttackRangeCount(incrementBy: number) {
    this.attackRangeCount += incrementBy;
    this.updateBackgroundTint();
  }

  public updateUtilityRangeCount(incrementBy: number) {
    this.utilityRangeCount += incrementBy;
    this.updateBackgroundTint();
  }

  private updateBackgroundTint() {
    if(this.backgroundTint === undefined) return;

    let tint: string = "";
    if(this.movementRangeCount > 0) { tint = this.movRangeColor; }
    else if(this.attackRangeCount > 0) { tint = this.atkRangeColor; }
    else if(this.utilityRangeCount > 0) { tint = this.utilRangeColor; }

    //If we picked a tint color, update.
    if(tint.length > 0) {
      this.backgroundTint.tint = tint;
      this.backgroundTint.visible = true;
    }
    else {
      this.backgroundTint.visible = false;
    }
  }
}

export class UnitContainer extends Container {

  /** Number of milliseconds. Used to establish rotation intervals for status condition and tag sprites. */
  private readonly SPRITE_ROTATION_INTERVAL: number = 2000;

  private readonly GRAYSCALE_FILTER: string = "grayscale";
  private readonly BRIGHT_FILTER: string = "bright";
  private readonly GLOW_FILTER: string = "glow";
  private readonly PINNED_FILTER: string = "pinned";

  private teamDataService: TeamDataService;
  private eventService: MapEventService;

  public readonly unitName: string;
  public unit: IUnit | undefined;
  private sprite: Sprite | undefined;
  private unitDimensions: number = 0;
  private activeSpriteFilters: StringDictionary<Filter>;

  constructor(teamDataService: TeamDataService, eventService: MapEventService, unitName: string, enableInteraction: boolean) {
    super(); //call the parent Container() constructor

    this.teamDataService = teamDataService;
    this.eventService = eventService;
    this.unitName = unitName;
    this.activeSpriteFilters = {};

    //Set this container's base attributes
    this.label = this.unitName;
    this.interactive = enableInteraction;
    this.interactiveChildren = false;
  }

  public async init() {

    //Attempt to load the unit by its name
    this.unit = this.teamDataService.getUnitByName(this.unitName);
    if(this.unit === undefined) {
      console.log(`Failed to locate unit name ${this.unitName}.`);
      return;
    }

    const constants: IMapConstants | undefined = this.teamDataService.getMapConstants();
    const tileDimensions: number = (constants?.tileSize ?? 16);
    this.unitDimensions = tileDimensions * this.unit.location.unitSize;

    //Load the unit's sprite
    const url = this.unit.sprite.spriteURL;
    const assetAlias = `unit ${this.unit.normalizedName}`;
    if(url.includes('.gif')) this.sprite = await SpriteLoader.getExternalGifSprite(assetAlias, url);
    else this.sprite = await SpriteLoader.getExternalSprite(assetAlias, url);

    if(this.sprite !== undefined)
    {
      this.addChild(this.sprite);

      this.sprite.label = 'unit_sprite';
      this.sprite.anchor.set(0.5); //manipulate sprite relative to its center
      this.sprite.x = (this.unitDimensions / 2);
      this.sprite.y = this.unitDimensions - (this.sprite.height / 2) - 2;

      //Horizontally flip sprite
      const affiliation: IAffiliation | undefined = this.teamDataService.getAffiliationByName(this.unit.affiliation);
      if(affiliation?.flipUnitSprites) {
        this.sprite.scale.x *= -1;
      }

      //Add grayscale filter
      if(this.unit.sprite.hasMoved ?? false)
        this.activeSpriteFilters[this.GRAYSCALE_FILTER] = SpriteFilters.getGrayscaleFilter();

      //Add aura glow filter
      const auraColor: string = (this.unit.sprite.aura ?? "");
      if(auraColor.length > 0)
        this.activeSpriteFilters[this.GLOW_FILTER] = SpriteFilters.getGlowFilter(auraColor);
    }

    //Render health bar
    const healthBarGradient = this.GetUnitHpBarGradient(this.unit.stats.hp.percentage);
    const healthBar = new Graphics()
      .rect(2, this.unitDimensions - 4, this.unitDimensions - 3, 3)
      .fill(healthBarGradient)
      .stroke({ width: 1, color: 0x000000, pixelLine: true });
    this.addChild(healthBar);
 
    //Render unit number
    const unitNumber = this.unit.unitNumber ?? "";
    if(unitNumber.length > 0) {
      const numbers = this.GetUnitNumberContainer(unitNumber);

      this.addChild(numbers);
      numbers.x = this.unitDimensions - numbers.width - 7;
      numbers.y = this.unitDimensions - numbers.height - 5;
    }

    //Render status conditions
    const unitStatuses = this.unit.statusConditions ?? [];
    if(unitStatuses.length > 0) {
      const conditions = await this.GetUnitStatusConditionContainer(unitStatuses);
      this.addChild(conditions);
    }

    //Render tag sprites
    const tagNames = this.unit.tags ?? [];
    if(tagNames.length > 0) {
      let tags = await this.GetUnitTagsContainer(tagNames);
      this.addChild(tags);
      tags.x = this.width - 12;
    }

    //Set initial filter list
    const filters = Object.values(this.activeSpriteFilters);
    if(this.sprite !== undefined && filters.length > 0) {
      this.sprite.filters = filters;
    }

    //Setup interaction events
    if(this.isInteractive()) {
      this.eventMode = 'static';
      this.cursor = 'pointer';
      this.hitArea = new Rectangle(0, 0, this.unitDimensions, this.unitDimensions);

      this.on('pointerdown', this.UnitContainer_PointerDown);
      this.on('pointerenter', this.UnitContainer_OnPointerEnter);
      this.on('pointerleave', this.UnitContainer_OnPointerLeave);
    }
  }

  /**
   * Determine the colors codes appropriate for the unit's current hpPercentage
   * 
   * @returns A new FillGradient with a linear left-right gradient utilizes the color codes
   */
  private GetUnitHpBarGradient(hpPercentage: number) : FillGradient 
  { 
    //Primary and secondary color hexes should match the ones from unit-hp-bar.ts
    let primaryColor: string, secondaryColor: string;
    if(hpPercentage > 100){
      primaryColor = "#992DE4";
      secondaryColor = "#d9cce3";
    } 
    else if(hpPercentage <= 100 && hpPercentage > 50)
    {
      primaryColor = "#3CD66F";
      secondaryColor = "#d3efdd";
    } 
    else if(hpPercentage <= 50 && hpPercentage > 25)
    {
      primaryColor = "#FFC107";
      secondaryColor = "#fff4d4";
    }
    else
    {
      primaryColor = "#F13535";
      secondaryColor = "#efd1d1";
    }

    //Prevent overfilled HP from going above 1.0
    const hpFraction = Math.min(hpPercentage / 100, 1.0);
    return new FillGradient({
      type: 'linear',
      start: { x: 0, y: 0.5 }, //linear left-to-right gradient
      end: { x: 1, y: 0.5 },
      colorStops: [
        //Transition colors immediately at the hpFraction
        { offset: hpFraction, color: primaryColor },
        { offset: hpFraction, color: secondaryColor },
      ],
    });
  }

  /**
   * Loads the sprite for each digit in unitNumber and inserts all sprites into a new Container.
   * 
   * @returns The new Container with all sprites added
   */
  private GetUnitNumberContainer(unitNumber: string) : Container {
    let container = new Container();
    container.interactive = false;
    container.interactiveChildren = false;

    unitNumber.split('').forEach((digit) => 
    {
      let sprite = Sprite.from(digit);

      container.addChild(sprite);
      sprite.x = container.width; //move sprite to end of the container
    });

    return container;
  }

  /**
   * Loads the sprite for each status in unitStatuses and inserts all sprites into a new Container.
   * If there is more than one sprite, sets up a rotation interval.
   * 
   * @returns The new Container with all sprites added
   */
  private async GetUnitStatusConditionContainer(unitStatuses: IUnitStatus[]) : Promise<Container> {
    let conditionSprites: Sprite[] = [];
    let useDefaultSprite: boolean = false;

    //Load sprites in parallel
    await Promise.all(unitStatuses.map(async(status) =>
    {
      let condition: IStatusCondition | undefined = this.teamDataService.getStatusConditionByName(status.name);
      if(condition === undefined) return;

      let url: string = condition?.spriteURL ?? "";
      if(url.length < 1) {
        useDefaultSprite = true;
        return;
      }

      let sprite: Sprite | undefined;
      let assetAlias = `status ${condition.name}`;
      if(url.includes('.gif')) sprite = await SpriteLoader.getExternalGifSprite(assetAlias, url);
      else sprite = await SpriteLoader.getExternalSprite(assetAlias, url);

      if(sprite === undefined) return;

      //Scale sprite down if it exceeds max dimensions of 12px
      sprite.height = Math.min(sprite.height, 12);
      sprite.width = Math.min(sprite.width, 12);

      conditionSprites.push(sprite);
    }));

    //If we flagged a condition without a sprite, push the default sprite to the front of the list
    if(useDefaultSprite) {
      let heart: Sprite = Sprite.from('status_heart');
      conditionSprites.unshift(heart);
    }

    let container = new Container();
    container.interactive = false;
    container.interactiveChildren = false;
    
    let shouldRotateSprites: boolean = (conditionSprites.length > 1);
    conditionSprites.forEach((sprite) => {
      container.addChild(sprite);
      sprite.visible = !shouldRotateSprites; //make invisible if we're going to rotate
    }); 

    //If we have multiple sprites, make only the first sprite visible and 
    //establish an interval to rotate the visible sprite.
    if(shouldRotateSprites) {
      container.getChildAt(0).visible = true;
      setInterval(this.RotateVisibilityOfContainerChildren, this.SPRITE_ROTATION_INTERVAL, container);
    }

    return container;
  }

  /**
   * Loads the sprite for each name in tagNames and inserts all sprites into a new Container.
   * If there is more than one sprite, sets up a rotation interval.
   * 
   * @returns The new Container with all sprites added
   */
  private async GetUnitTagsContainer(tagNames: string[]) : Promise<Container> {
    let tagSprites: Sprite[] = [];

    //Load sprites in parallel
    await Promise.all(tagNames.map(async(name) =>
    {
      let tag: ITag | undefined = this.teamDataService.getTagByName(name);
      if(tag === undefined) return;

      let url: string = tag?.spriteURL ?? "";
      let showOnUnit: boolean = tag?.showOnUnit ?? false;
      if(url.length < 1 || !showOnUnit) return;

      let sprite;
      let assetAlias = `tag ${name}`;
      if(url.includes('.gif')) sprite = await SpriteLoader.getExternalGifSprite(assetAlias, url);
      else sprite = await SpriteLoader.getExternalSprite(assetAlias, url);

      if(sprite === undefined) return;

      //Scale sprite down if it exceeds max dimensions of 12px
      sprite.height = Math.min(sprite.height, 12);
      sprite.width = Math.min(sprite.width, 12);

      tagSprites.push(sprite);
    }));

    let container = new Container();
    container.interactive = false;
    container.interactiveChildren = false;
    
    let shouldRotateSprites: boolean = (tagSprites.length > 1);
    tagSprites.forEach((sprite) => {
      container.addChild(sprite);
      sprite.visible = !shouldRotateSprites; //make invisible if we're going to rotate
    }); 

    //If we have multiple sprites, make only the first sprite visible and 
    //establish an interval to rotate the visible sprite.
    if(shouldRotateSprites) {
      container.getChildAt(0).visible = true;
      setInterval(this.RotateVisibilityOfContainerChildren, this.SPRITE_ROTATION_INTERVAL, container);
    }

    return container;
  }

  /**
   * Intended to be called on an inverval system. Looks for the current visible child of container,
   * makes it invisible, then sets the next child to visible. Loops when it reaches the end of the
   * child list.
   */
  private RotateVisibilityOfContainerChildren(container: Container) {
    if(container.children.length === 0) return;

    let visibleChildIndex: number = container.children.findIndex(s => s.visible);
    container.getChildAt(visibleChildIndex).visible = false;

    //Increment index, reset to 0 if we exceed list length
    if(++visibleChildIndex >= container.children.length)
      visibleChildIndex = 0;

    container.getChildAt(visibleChildIndex).visible = true;
  }

  // #region Event Handling

  public pinUnit() {
    if(this.sprite === undefined) return;

    this.activeSpriteFilters[this.PINNED_FILTER] = SpriteFilters.getUnitPinnedFilter();
    this.sprite.filters = Object.values(this.activeSpriteFilters);
  }

  public unpinUnit() {
    if(this.sprite === undefined) return;

    delete this.activeSpriteFilters[this.PINNED_FILTER];
    this.sprite.filters = Object.values(this.activeSpriteFilters);
  }

  public UnitContainer_PointerDown(event: FederatedPointerEvent) {
    if(this.unit === undefined) return;
    this.eventService.toggleUnitPinnedState(this.unit.name);
  }

  public UnitContainer_OnPointerEnter(event: FederatedPointerEvent) {
    if(this.sprite === undefined) return;

    this.activeSpriteFilters[this.BRIGHT_FILTER] = SpriteFilters.getBrightFilter();
    this.sprite.filters = Object.values(this.activeSpriteFilters);
  }

  public UnitContainer_OnPointerLeave(event: FederatedPointerEvent) {
    if(this.sprite === undefined) return;

    delete this.activeSpriteFilters[this.BRIGHT_FILTER];
    this.sprite.filters = Object.values(this.activeSpriteFilters);
  }

  // #endregion Event Handling
}