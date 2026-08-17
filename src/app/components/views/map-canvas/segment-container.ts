import { Container, FederatedPointerEvent } from "pixi.js";
import { StringDictionary } from "../../../data/interfaces/common/dictionaries";
import { IMapSegment } from "../../../data/interfaces/map/map-segment";
import { MapEventService } from "../../../services/map-event-service";
import { TeamDataService } from "../../../services/team-data-service";
import { TileContainer } from "./tile-container";
import { UnitContainer } from "./unit-container";
import { SpriteLoader } from "./sprite-loader";
import { ICoordinate } from "../../../data/interfaces/map/coordinate";
import { PaintContainer } from "./paint-container";
import { TileCursorSprite } from "./tile-cursor-sprite";
import { inject, Injector, runInInjectionContext } from "@angular/core";
import { IMapConstants } from "../../../data/interfaces/map/map-constants";

export class SegmentContainer extends Container {
  private readonly injector: Injector;
  private eventService: MapEventService | undefined;
  public readonly segment: IMapSegment;

  private readonly tileDimensions: number;
  private readonly tileDimensionCenter: number;
  private readonly hasTopLeftHeaders: boolean;
  private readonly hasBottomRightHeaders: boolean;

  private paintContainer: PaintContainer;
  private tileCursor: TileCursorSprite;
  private tileContainers: StringDictionary<TileContainer> = {};
  private unitContainers: StringDictionary<UnitContainer> = {};

  private currTileXY: [number, number] = [0, 0];

  constructor(injector: Injector, segment: IMapSegment) {
    super(); //call the parent Container() constructor

    this.injector = injector;
    this.segment = segment;

    let constants: IMapConstants | undefined;
    runInInjectionContext(injector, () => {
      const teamDataService = inject(TeamDataService);
      constants = teamDataService.getMapConstants();

      this.eventService = inject(MapEventService);
    });

    this.tileDimensions = (constants?.tileSize ?? 16);
    this.tileDimensionCenter = Math.floor(this.tileDimensions / 2);
    this.hasTopLeftHeaders = (constants?.hasHeaderTopLeft ?? false);
    this.hasBottomRightHeaders = (constants?.hasHeaderBottomRight ?? false);

    //Set this container's base attributes
    this.label = this.segment.title;
    this.height = this.segment.heightInPixels;
    this.width = this.segment.widthInPixels;

    //Create tile cursor
    this.tileCursor = new TileCursorSprite(this.tileDimensions);
    this.addChild(this.tileCursor);

    //Create paint container
    this.paintContainer = new PaintContainer(this.injector, this.height, this.width);
    this.addChild(this.paintContainer);

    //Subscribe to events
    this.on('pointermove', this.SegmentContainer_PointerMove_PointerTap);
    this.on('pointertap', this.SegmentContainer_PointerMove_PointerTap);

    //Needs to be last, as it also hides the tile cursor
    this.disableInteraction();
  }

  public async init() {
    //Load the segment's background. Don't use an alias here, as segments with the same name (i.e. "Segment 1")
    //will load a cached image when swapping between teams w/o reloading the app
    const segmentBackground = await SpriteLoader.getExternalSprite("", this.segment.imageURL);
    if(segmentBackground !== undefined)
      this.addChild(segmentBackground);

    //Load all tiles in parallel
    await Promise.all(this.segment.tiles.map(async row => {
      await Promise.all(row.map(async tile =>
      {
        const tileContainer : TileContainer = new TileContainer(this.injector, tile);
        await tileContainer.init()
        
        //Add container as child and position it
        this.addChild(tileContainer);

        const coordinate: ICoordinate = tile.coordinate;
        tileContainer.position = {
          x: this.tileDimensions * (coordinate.x - this.segment.horizontalTileRangeWithinMap.start.value + (this.hasTopLeftHeaders ? 1 : 0)),
          y: this.tileDimensions * ((coordinate.y - 1) + (this.hasTopLeftHeaders ? 1 : 0))
        };

        this.addTileItemsToDictionaries(tileContainer);
      }))
    }));
  }

  private addTileItemsToDictionaries(container: TileContainer) {
    this.tileContainers[container.tile.coordinate.asText] = container;

    const unitContainer: UnitContainer | undefined = container.unitContainer;
    const pairedUnitContainer: UnitContainer | undefined = container.pairupUnitContainer;
    
    if(unitContainer !== undefined)
      this.unitContainers[unitContainer.unitName] = unitContainer;
    if(pairedUnitContainer !== undefined)
      this.unitContainers[pairedUnitContainer.unitName] = pairedUnitContainer;
  }

  private updateCurrentTile(x: number, y: number) {
    //Offset x by the segment's horizontal displacement
    x += this.segment.horizontalTileRangeWithinMap.start.value - 1;

    //If this is already the current tile, don't send another event
    if(x === this.currTileXY[0] && y === this.currTileXY[1])
      return;

    this.currTileXY = [x, y];
    this.eventService?.updateCurrentTileCoordinates(x, y);
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