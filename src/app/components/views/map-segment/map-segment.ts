import { initDevtools } from '@pixi/devtools';
import { Component, inject, input } from '@angular/core';
import { MapSegment as IMapSegment } from '../../../interfaces/map/map-segment';
import { Application, Assets, ColorMatrixFilter, Container, ContainerChild, FederatedPointerEvent, FillGradient, Graphics, Rectangle, Sprite, Texture } from 'pixi.js';
import { GifSource, GifSprite } from 'pixi.js/gif';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { TeamDataService } from '../../../services/team-data-service';
import { MapConstants } from '../../../interfaces/map/map-constants';
import { Coordinate } from '../../../interfaces/map/coordinate';
import { UnitStatus } from '../../../interfaces/unit/unit-status';
import { StatusCondition } from '../../../interfaces/system/status-condition';
import { Tag } from '../../../interfaces/system/tag';

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
  segment = input.required<IMapSegment>();

  private snackBar : MatSnackBar;
  private snackBarMessageQueue : string[];
  private currentSnackBar : MatSnackBarRef<TextOnlySnackBar> | undefined;

  private constants : MapConstants | undefined;
  private pixiApp : Application;
  private mapContainer : Container | undefined;

  private grayscaleFilter : ColorMatrixFilter;

  constructor(public teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
    this.snackBar = inject(MatSnackBar);
    
    this.constants = this.teamDataService.getMapConstants();
    this.pixiApp = new Application();
    this.snackBarMessageQueue = [];

    //Establish sprite filters
    this.grayscaleFilter = new ColorMatrixFilter();
    this.grayscaleFilter.blackAndWhite(true);
  }

  async ngOnInit() {
    let pixiContainer = document.getElementById("pixiContainer");
    if(pixiContainer === null) {
      console.log("Failed to find container for PixiJS canvas");
      return;
    }

    await Assets.setPreferences({
      crossOrigin: '*'
    });

    //Load common sprites
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
    Assets.addBundle('unit-statuses', [
      { alias: 'status_heart', src: 'img/status_heart.png' }
    ]);
    await Assets.loadBundle(['unit-numbers', 'unit-statuses']);

    await this.InitializePixiApp(pixiContainer);
    await this.AddMapParentContainer();
    await this.AddMapElements();
  }

  //async ngOnChanges() {
    //If the app doesn't have children yet, then this is the first initialization
    //Let ngOnInit() handle it
  //  if(this.pixiApp.stage.children.length === 0)
  //    return;

   // this.pixiApp.stage.removeChildren();
  //  await this.AddMapParentContainer();
  //}

  // #region Snack Bar Queue

  /** Appends a new message to the end of the snack bar queue.
   * 
   * @param imageUrl - Used to build the snack bar message
   */
  private queueImageLoadFailedSnackBar(imageUrl: string) {
    var message = `Image \"${imageUrl}\" failed to load`;
    this.snackBarMessageQueue.push(message);

    if (this.currentSnackBar === undefined)
      this.showNextSnackBarInQueue();
  }

  /** If there is a message present at the front of the snack bar queue, presents that message as a new snack bar. */
  private showNextSnackBarInQueue() {
    this.currentSnackBar = undefined;

    var nextMessage = this.snackBarMessageQueue.shift() ?? "";
    if (nextMessage === "") return;

    this.showSnackBar(nextMessage, 5000);
  }

  /** Opens an Angular Material snackbar in the upper right of the screen for a specifed duration. 
   * 
   * @param message - The text displayed on the snackbar
   * @param duration - The number of milliseconds the snackbar will remain visible
  */
  private showSnackBar(message: string, duration: number) {
    this.currentSnackBar = this.snackBar.open(message, undefined, {
      duration: duration,
      horizontalPosition: "right",
      verticalPosition: "top"
    });

    this.currentSnackBar.afterDismissed().subscribe(() => {
      this.showNextSnackBarInQueue();
    });
  }

  // #endregion Snack Bar Queue

  /** Initializes `this.pixiApp` and appends its resulting canvas as a child of the `appContainer` element. 
   * @param appContainer - The HTML element that will contain the Pixi.JS canvas
  */
  private async InitializePixiApp(appContainer: HTMLElement) {
    await this.pixiApp.init({ 
      backgroundAlpha: 0, 
      height: this.segment().heightInPixels, 
      width: this.segment().widthInPixels
    });
    appContainer.appendChild(this.pixiApp.canvas);
  }

  /** Creates a container, appends it to the `this.pixiApp` stage, and fills it with a centered map segment image. */
  private async AddMapParentContainer() {
    this.mapContainer = new Container();
    this.mapContainer.setSize(this.segment().widthInPixels, this.segment().heightInPixels);

    this.pixiApp.stage.addChild(this.mapContainer);

    let assetAlias = `segment ${this.segment().title}`;
    const sprite = await this.getExternalSprite(assetAlias, this.segment().imageURL);
    if(sprite === undefined) return;

    this.mapContainer.addChild(sprite);
  }

  private async AddMapElements() {
    //Loop through every tile in the map
    this.segment().tiles.forEach((row) => {
      row.forEach((tile) =>
      {
        if(tile.unitData.isUnitAnchor)
          this.CreateUnitContainer(tile.unitData.occupyingUnitName, tile.unitData.pairedUnitName, tile.coordinate);
      }
    )});
  }

  private async CreateUnitContainer(unitName: string, pairedUnitName: string | undefined, coordinate: Coordinate) {
    let unit = this.teamDataService.getUnitByName(unitName);
    if(unit === undefined) {
      console.log(`Failed to locate unit name ${unitName}.`);
      return;
    }

    const tileDimensions = (this.constants?.tileSize ?? 16);
    const unitDimensions = tileDimensions * unit.location.unitSize;

    //Create a container and place it on the map
    let container = new Container();
    container.label = unitName;
    container.interactive = true;
    container.interactiveChildren = false;

    //Load the unit's sprite
    let sprite;
    let url = unit.sprite.spriteURL;
    let assetAlias = `unit ${unit.normalizedName}`;
    if(url.includes('.gif')) sprite = await this.getExternalGif(assetAlias, url);
    else sprite = await this.getExternalSprite(assetAlias, url);

    if(sprite !== undefined)
    {
      container.addChild(sprite);

      sprite.label = 'unit_sprite';
      sprite.anchor.set(0.5); //manipulate sprite relative to its center
      sprite.x = (unitDimensions / 2);
      sprite.y = unitDimensions - (sprite.height / 2) - 2;

      //Horizontally flip sprite
      let affiliation = this.teamDataService.getAffiliationByName(unit.affiliation);
      if(affiliation?.flipUnitSprites) {
        sprite.scale.x *= -1;
      }

      //Make sprite grayscale
      if(unit.sprite.hasMoved ?? false)
        sprite.filters = (sprite.filters ?? []).concat([this.grayscaleFilter]);
    }

    //Render health bar
    const healthBarGradient = this.GetUnitHpBarGradient(unit.stats.hp.percentage);
    let healthBar = new Graphics()
      .rect(2, unitDimensions - 4, unitDimensions - 3, 3)
      .fill(healthBarGradient)
      .stroke({ width: 1, color: 0x000000, pixelLine: true });
    container.addChild(healthBar);

    //Render unit number
    const unitNumber = unit.unitNumber ?? "";
    if(unitNumber.length > 0) {
      let numbers = this.GetUnitNumberContainer(unitNumber);

      container.addChild(numbers);
      numbers.x = unitDimensions - numbers.width - 7;
      numbers.y = unitDimensions - numbers.height - 5;
    }

    //Render status conditions
    let unitStatuses = unit.statusConditions ?? [];
    if(unitStatuses.length > 0) {
      let conditions = await this.GetUnitStatusConditionContainer(unitStatuses);
      container.addChild(conditions);
    }

    //Render tag sprites
    let tagNames = unit.tags ?? [];
    if(tagNames.length > 0) {
      let tags = await this.GetUnitTagsContainer(tagNames);
      container.addChild(tags);
      tags.x = container.width - 12;
    }

    //Place whole container on map
    this.mapContainer?.addChild(container);
    container.zIndex = coordinate.y;
    container.position = {
      x: tileDimensions * ((coordinate.x - 1) + (this.constants?.hasHeaderTopLeft ? 1 : 0)), 
      y: tileDimensions * ((coordinate.y - 1) + (this.constants?.hasHeaderTopLeft ? 1 : 0))
    };

    //Setup interaction events for the container
    container.eventMode = 'static';
    container.cursor = 'pointer';
    container.hitArea = new Rectangle(0, 0, unitDimensions, unitDimensions);

    container.on('pointerenter', this.UnitContainer_OnPointerEnter);
    container.on('pointerleave', this.UnitContainer_OnPointerLeave);
  }

  private UnitContainer_OnPointerEnter(event: FederatedPointerEvent) {
    let container: Container = event.target;
    let sprite: Sprite | null = container.getChildByLabel('unit_sprite', false) as Sprite;
    if(sprite === null) return;

    const filter = new ColorMatrixFilter();
    filter.brightness(1.5, false);

    sprite.filters = (sprite.filters ?? []).concat([filter]);
  }

  private UnitContainer_OnPointerLeave(event: FederatedPointerEvent) {
    let container: Container = event.target;
    let sprite: Sprite | null = container.getChildByLabel('unit_sprite', false) as Sprite;
    if(sprite === null) return;

    sprite.filters = null;
  }

  private GetUnitHpBarGradient(hpPercentage: number) : FillGradient 
  { 
    //Primary and secondary color hexes should match the ones from unit-hp-bar.ts
    var primaryColor, secondaryColor;
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
        { offset: hpFraction, color: primaryColor },
        { offset: hpFraction, color: secondaryColor },
      ],
    });
  }

  private GetUnitNumberContainer(unitNumber: string) : Container {
    let container = new Container();
    container.interactive = false;
    container.interactiveChildren = false;

    unitNumber.split('').forEach((digit) => 
    {
      let sprite = Sprite.from(digit);

      container.addChild(sprite);
      sprite.x = container.width;
    });

    return container;
  }

  private async GetUnitStatusConditionContainer(unitStatuses: UnitStatus[]) : Promise<Container> {
    let conditionSprites: Sprite[] = [];
    let useDefaultSprite: boolean = false;

    //Load sprites in parallel
    await Promise.all(unitStatuses.map(async(status) =>
    {
      let condition: StatusCondition | undefined = this.teamDataService.getStatusConditionByName(status.name);
      if(condition === undefined) return;

      let url: string = condition?.spriteURL ?? "";
      if(url.length < 1) {
        useDefaultSprite = true;
        return;
      }

      let sprite;
      let assetAlias = `status ${condition.name}`;
      if(url.includes('.gif')) sprite = await this.getExternalGif(assetAlias, url);
      else sprite = await this.getExternalSprite(assetAlias, url);

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

    //If we have multiple sprites, make the first sprite visible and 
    //establish an interval to rotate the visible sprite every 2 seconds (2000 ms)
    if(shouldRotateSprites) {
      container.getChildAt(0).visible = true;
      setInterval(this.RotateVisibilityOfContainerChildren, 2000, container);
    }

    return container;
  }

  private async GetUnitTagsContainer(tagNames: string[]) : Promise<Container> {
    let tagSprites: Sprite[] = [];

    //Load sprites in parallel
    await Promise.all(tagNames.map(async(name) =>
    {
      let tag: Tag | undefined = this.teamDataService.getTagByName(name);
      if(tag === undefined) return;

      let url: string = tag?.spriteURL ?? "";
      let showOnUnit: boolean = tag?.showOnUnit ?? false;
      if(url.length < 1 || !showOnUnit) return;

      let sprite;
      let assetAlias = `tag ${name}`;
      if(url.includes('.gif')) sprite = await this.getExternalGif(assetAlias, url);
      else sprite = await this.getExternalSprite(assetAlias, url);

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

    //If we have multiple sprites, make the first sprite visible and 
    //establish an interval to rotate the visible sprite every 2 seconds (2000 ms)
    if(shouldRotateSprites) {
      container.getChildAt(0).visible = true;
      setInterval(this.RotateVisibilityOfContainerChildren, 2000, container);
    }

    return container;
  }

  private RotateVisibilityOfContainerChildren(container: Container) {
    if(container.children.length === 0) return;

    let visibleChildIndex: number = container.children.findIndex(s => s.visible);
    container.getChildAt(visibleChildIndex).visible = false;

    //Increment index, reset to 0 if we exceed list length
    if(++visibleChildIndex >= container.children.length)
      visibleChildIndex = 0;

    container.getChildAt(visibleChildIndex).visible = true;
  }

  // #region External Asset Loading

  private async getExternalSprite(alias: string, assetUrl: string) : Promise<Sprite | undefined> {
    const img = await this.loadExternalTextureAsset(alias, assetUrl)
      .catch((error) => {
        this.queueImageLoadFailedSnackBar(assetUrl);
        return undefined;
      });

    return new Sprite(img);
  }

  private async loadExternalTextureAsset(alias: string, assetUrl: string) : Promise<Texture> {
    return Assets.load<Texture>({
      alias: alias,
      src: assetUrl,
      parser: 'loadTextures'
    });
  }

  private async getExternalGif(alias: string, assetUrl: string) : Promise<GifSprite | undefined> {
    const gif = await this.loadExternalGifAsset(alias, assetUrl)
      .catch((error) => {
        this.queueImageLoadFailedSnackBar(assetUrl);
        return undefined;
      });
    if(gif === undefined) return undefined;

    return new GifSprite(gif);
  }

  private async loadExternalGifAsset(alias: string, assetUrl: string) : Promise<GifSource> {
    return Assets.load<GifSource>({
      alias: alias,
      src: assetUrl
    });
  }

  // #endregion External Asset Loading
}
