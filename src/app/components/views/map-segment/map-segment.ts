import '@pixi/layout';
import { LayoutContainer } from '@pixi/layout/components';
import { Component, inject, input } from '@angular/core';
import { MapSegment as IMapSegment } from '../../../interfaces/map/map-segment';
import { Application, Assets, Container, Sprite, Texture } from 'pixi.js';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'map-segment',
  imports: [],
  templateUrl: './map-segment.html',
  styleUrl: './map-segment.scss',
})
export class MapSegment {
  segment = input.required<IMapSegment>();

  private snackBar : MatSnackBar;
  private snackBarMessageQueue : string[];
  private currentSnackBar : MatSnackBarRef<TextOnlySnackBar> | undefined;

  private pixiApp : Application;

  constructor() {
    this.snackBar = inject(MatSnackBar);
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
  }

  async ngOnChanges() {
    //If the app doesn't have children yet, then this is the first initialization
    //Let ngOnInit() handle it
    if(this.pixiApp.stage.children.length === 0)
      return;

    this.pixiApp.stage.removeChildren();
    await this.AddMapParentContainer();
  }

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
    await this.pixiApp.init({ backgroundAlpha: 0, resizeTo: appContainer });
    appContainer.appendChild(this.pixiApp.canvas);

    this.pixiApp.stage.layout = {
      width: this.pixiApp.screen.width,
      height: this.pixiApp.screen.height
    };
  }

  /** Creates a container, appends it to the `this.pixiApp` stage, and fills it with a centered map segment image. */
  private async AddMapParentContainer() {
    const mapScrollContainer = new LayoutContainer({
      layout: {
        width: this.pixiApp.screen.width,
        height: this.pixiApp.screen.height,
        overflow: 'scroll',
        padding: 8
      },
      trackpad: {
        constrain: false
      }
    });
    this.pixiApp.stage.addChild(mapScrollContainer);
    
    const map = new Container({
        layout: {
          width: this.segment().widthInPixels,
          height: this.segment().heightInPixels
        },
    });
    mapScrollContainer.addChild(map);

    const mapImage = await this.loadExternalAsset(this.segment().imageURL)
      .catch((error) => {
        this.queueImageLoadFailedSnackBar(this.segment().imageURL); 
      });

    if(mapImage === undefined)
      return;
    const mapSprite = new Sprite(mapImage);
    map.addChild(mapSprite);
  }

  private async loadExternalAsset(assetUrl: string) : Promise<Texture> {
    return Assets.load<Texture>({
      src: assetUrl
    });
  }
}
