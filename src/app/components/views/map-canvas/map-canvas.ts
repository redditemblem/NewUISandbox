import { initDevtools } from '@pixi/devtools';
import { Component, inject, Injector, input, signal } from '@angular/core';
import { IMapSegment } from '../../../data/interfaces/map/map-segment';
import { Application, Assets, ImageLike, TextureSource } from 'pixi.js';
import { TeamDataService } from '../../../services/team-data-service';
import { StringDictionary } from '../../../data/interfaces/common/dictionaries';
import { MapEventService } from '../../../services/map-event-service';
import { SegmentContainer } from './segment-container';

@Component({
  selector: 'map-canvas',
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
export class MapCanvas {
  //External inputs
  currentSegmentTitle = input.required<string>();

  //Internal attributes
  private readonly injector: Injector;
  private readonly pixiApp : Application;

  private segmentContainers : StringDictionary<SegmentContainer> = {};
  private activeSegment: SegmentContainer | undefined;

  constructor(private readonly teamDataService: TeamDataService, private readonly eventService: MapEventService) {
    this.injector = inject(Injector);
    this.teamDataService = inject(TeamDataService);
    this.eventService = inject(MapEventService);
    
    this.pixiApp = new Application();

    //Subscribe to external events
    this.eventService.downloadMapAsImage
      .subscribe(() => this.downloadMapAsImage());
    /*this.eventService.updatePaintMode
      .subscribe((inPaintMode: boolean) => this.updatePaintMode(inPaintMode));
    this.eventService.clearPaintContainer
      .subscribe(() => this.clearPaintContainer());
    this.eventService.undoLastPaintContainerLine
      .subscribe(() => this.undoLastPaintContainerLine());*/
  }

  async ngOnInit() {
    const pixiContainer: HTMLElement | null = document.getElementById("pixiContainer");
    if(pixiContainer === null) {
      console.error("Failed to find container for PixiJS canvas.");
      return;
    }

    //Set global preferences
    TextureSource.defaultOptions.scaleMode = 'nearest'; //render sprites crisp
    await Assets.setPreferences({
      crossOrigin: '*'
    });

    await this.loadCommonAssets();
    await this.initializePixiApp(pixiContainer);
    await this.createSegmentContainers();

    this.updateActiveSegment();
  }

  async ngOnChanges() {
    this.updateActiveSegment();
  }

  /** Loads common sprites from the `img` folder. */
  private async loadCommonAssets() {
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

  /**
   * Initializes `pixiApp` and appends its resulting canvas as a child of the `appContainer` element.
   *  
   * @param appContainer - The HTML element that will contain the Pixi.JS canvas
  */
  private async initializePixiApp(appContainer: HTMLElement) {
    await this.pixiApp.init({ 
      backgroundAlpha: 0
    });
    this.pixiApp.canvas.id = 'pixiCanvas';

    appContainer.appendChild(this.pixiApp.canvas);
  }

  /** Creates a new `SegmentContainer` per map segment and adds them to the stage. */
  private async createSegmentContainers() {
    const segments: IMapSegment[] = this.teamDataService.mapData().map?.segments ?? [];

    //Create segments in parallel
    await Promise.all(segments.map(async segment => {
      try {
        const container: SegmentContainer = new SegmentContainer(this.injector, segment);
        await container.init();

        //Add container to tracking dictionary
        this.segmentContainers[segment.title] = container;

        //Add segment to stage and make it invisible by default
        container.visible = false;
        this.pixiApp.stage.addChild(container);
      }
      catch (error) {
        //Prevent an error in one container from crashing the display
        console.error(error);
      }
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

    //Update the active segment
    this.activeSegment = container;
    this.activeSegment.visible = true;
    this.activeSegment.enableInteraction();

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
}