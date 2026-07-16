import { initDevtools } from '@pixi/devtools';
import { Component, inject, input } from '@angular/core';
import { MapSegment as IMapSegment } from '../../../interfaces/map/map-segment';
import { Application, Assets, Container, Sprite, Texture } from 'pixi.js';
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

  constructor(public teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
    this.snackBar = inject(MatSnackBar);
    
    this.constants = this.teamDataService.getMapConstants();
    this.pixiApp = new Application();
    this.snackBarMessageQueue = [];
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

  private async CreateUnitContainer(unitName: string, pairedUnitName: string | undefined, coordinate: Coordinate) : Promise<Container> {
    let container = new Container();
    container.setSize(this.constants?.tileSize ?? 16);
    container.label = unitName;

    //Place this unit on the map
    this.mapContainer?.addChild(container);
    container.x = (this.constants?.tileSize ?? 16) * (coordinate.x - 1);
    container.y = (this.constants?.tileSize ?? 16) * (coordinate.y - 1);

    let unit = this.teamDataService.getUnitByName(unitName);
    if(unit === undefined) return container;

    var sprite;
    let url = unit.sprite.spriteURL;
    if(url.includes('.gif')) sprite = await this.getExternalGif(url);
    else sprite = await this.getExternalSprite(url);

    if(sprite !== undefined)
      container.addChild(sprite);

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
