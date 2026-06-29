import { Component, input } from '@angular/core';
import { MapSegment as IMapSegment } from '../../../interfaces/map/map-segment';
import { Application, Assets, Container, Sprite } from 'pixi.js';

@Component({
  selector: 'map-segment',
  imports: [],
  templateUrl: './map-segment.html',
  styleUrl: './map-segment.scss',
})
export class MapSegment {
  segment = input.required<IMapSegment>();

  private pixiApp : Application;

  constructor() {
    this.pixiApp = new Application();
  }

  async ngOnInit() {
    let pixiContainer = document.getElementById("pixiContainer");
    if(pixiContainer === null) {
      console.log("Failed to find container for PixiJS canvas");
      return;
    }

    await Assets.setPreferences({
      crossOrigin: 'anonymous'
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

  private async initializePixiApp(container: HTMLElement) {
    await this.pixiApp.init({ background: '#ffaadd', resizeTo: container });
    container.appendChild(this.pixiApp.canvas);
  }

  private async AddMapParentContainer() {
    const map = new Container();
    this.pixiApp.stage.addChild(map);

    const mapImage = await this.loadExternalAsset(this.segment().imageURL);
    const mapSprite = new Sprite(mapImage);
    map.addChild(mapSprite);

    // Move the map to the center of the screen
    map.x = 0; //this.pixiApp.screen.width / 2;
    map.y = 0; //this.pixiApp.screen.height / 2;
  }

  private async loadExternalAsset(assetUrl: string) {
    return await Assets.load({
      src: assetUrl,
      parser: 'texture'
    });
  }
}
