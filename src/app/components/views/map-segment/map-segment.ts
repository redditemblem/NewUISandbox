import { initDevtools } from '@pixi/devtools';
import { Component, inject, input } from '@angular/core';
import { MapSegment as IMapSegment } from '../../../interfaces/map/map-segment';
import { Application, Assets, ColorMatrixFilter, Container, FillGradient, Graphics, Sprite, Texture } from 'pixi.js';
import { GifSource, GifSprite } from 'pixi.js/gif';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { TeamDataService } from '../../../services/team-data-service';
import { MapConstants } from '../../../interfaces/map/map-constants';
import { Coordinate } from '../../../interfaces/map/coordinate';

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
    await Assets.loadBundle('unit-numbers');

    await this.initializePixiApp(pixiContainer);
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
  private async initializePixiApp(appContainer: HTMLElement) {
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

    const sprite = await this.getExternalSprite(this.segment().imageURL);
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
    if(unit === undefined) return;

    const unitWidth = (this.constants?.tileSize ?? 16) * unit.location.unitSize;

    //Create a container and place it on the map
    let container = new Container();
    container.label = unitName;
    container.interactive = false;
    container.interactiveChildren = false;

    //Load the unit's sprite
    var sprite;
    let url = unit.sprite.spriteURL;
    if(url.includes('.gif')) sprite = await this.getExternalGif(url);
    else sprite = await this.getExternalSprite(url);

    if(sprite !== undefined)
    {
      container.addChild(sprite);
      sprite.anchor.set(0.5); //manipulate sprite relative to its center
      sprite.x = (unitWidth / 2);
      sprite.y = unitWidth - (sprite.height / 2) - 2;

      //Horizontally flip sprite
      let affiliation = this.teamDataService.getAffiliationByName(unit.affiliation);
      if(affiliation?.flipUnitSprites) {
        sprite.scale.x = -1;
      }

      //Make sprite grayscale
      if(unit.sprite.hasMoved ?? false)
        sprite.filters = (sprite.filters ?? []).concat([this.grayscaleFilter])
    }

    //Render health bar
    const healthBarGradient = this.GetUnitHpBarGradient(unit.stats.hp.percentage);
    let healthBar = new Graphics()
      .rect(2, unitWidth - 4, unitWidth - 3, 3)
      .fill(healthBarGradient)
      .stroke({ width: 1, color: 0x000000, pixelLine: true });
    container.addChild(healthBar);

    //Render unit number
    const unitNumber = unit.unitNumber ?? "";
    if(unitNumber.length > 0) {
      let numbers = this.GetUnitNumberContainer(unitNumber);

      container.addChild(numbers);
      numbers.x = unitWidth - numbers.width - 7;
      numbers.y = unitWidth - numbers.height - 5;
    }

    //Place whole container on map
    this.mapContainer?.addChild(container);
    container.position = {
      x: unitWidth * (coordinate.x - 1), 
      y: unitWidth * (coordinate.y - 1)
    };
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

    const hpFraction = hpPercentage / 100;
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

  // #region External Asset Loading

  private async getExternalSprite(assetUrl: string) : Promise<Sprite | undefined> {
    const img = await this.loadExternalTextureAsset(assetUrl)
      .catch((error) => {
        this.queueImageLoadFailedSnackBar(assetUrl);
        return undefined;
      });

    return new Sprite(img);
  }

  private async loadExternalTextureAsset(assetUrl: string) : Promise<Texture> {
    return Assets.load<Texture>({
      src: assetUrl,
      parser: 'loadTextures'
    });
  }

  private async getExternalGif(assetUrl: string) : Promise<GifSprite | undefined> {
    const gif = await this.loadExternalGifAsset(assetUrl)
      .catch((error) => {
        this.queueImageLoadFailedSnackBar(assetUrl);
        return undefined;
      });
    if(gif === undefined) return undefined;

    return new GifSprite(gif);
  }

  private async loadExternalGifAsset(assetUrl: string) : Promise<GifSource> {
    return Assets.load<GifSource>({
      src: assetUrl
    });
  }

  // #endregion External Asset Loading
}
