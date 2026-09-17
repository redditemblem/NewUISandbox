import { effect, inject, Injector, runInInjectionContext } from "@angular/core";
import { Container, Graphics, Text } from "pixi.js";
import { MapAnalysisEventService, MapAnalysisMode } from "../../services/map-analysis-event-service";
import { ITile } from "../../data/interfaces/map/tile";
import { ITerrainType } from "../../data/interfaces/system/terrain-type";
import { MapAnalysisDataService } from "../../services/map-analysis-data-service";

export class TileAnalysisBackgroundContainer extends Container {
  
  //Constants
  private readonly LOW_MOVE_COST_COLOR = "#000000";
  private readonly MEDIUM_MOVE_COST_COLOR = "#e2aa00";
  private readonly HIGH_MOVE_COST_COLOR = "#db1212";
  private readonly EXTREME_MOVE_COST_COLOR = "#992DE4";

  private readonly WHITE_STROKE_COLOR = "#ffffff";
  private readonly BLACK_STROKE_COLOR = "#000000";

  //Internal attributes
  private eventService: MapAnalysisEventService | undefined;
  private terrainType: ITerrainType | undefined;

  private readonly tintGraphic: Graphics;
  private readonly text: Text;

  constructor(private readonly injector: Injector, private readonly tile: ITile, private readonly dimensions: number) {
    super({ 
      label: `${tile.coordinate.asText} background`,
      visible: false,
      interactive: false,
      interactiveChildren: false,
      eventMode: 'none'
    });

    this.tintGraphic = this.createTint();
    this.text = this.createText();
    this.addChild(this.tintGraphic, this.text);

    //Watch for tile state changes
    runInInjectionContext(injector, () => {
      const dataService = inject(MapAnalysisDataService);
      this.eventService = inject(MapAnalysisEventService);

      this.terrainType = dataService.getTerrainTypeByName(tile.terrainType);

      effect(() => {
        this.updateState(this.eventService!.mode());
      });
    });
  }

  private createTint() : Graphics {
    return new Graphics({
      visible: false,
      interactive: false,
      interactiveChildren: false,
      eventMode: 'none'
    })
    .rect(1, 1, this.dimensions-1, this.dimensions-1)
    .fill({
      color: "#ffffff",
      alpha: 0.5
    });
  }

  private createText(): Text {
    const tileMidpoint: number = this.dimensions / 2;
    return new Text({
      text: "1",
      style: {
        fontSize: Math.floor(this.dimensions * 0.75),
        fill: this.LOW_MOVE_COST_COLOR,
        stroke: {
          color: this.WHITE_STROKE_COLOR,
          width: 2
        }
      },
      anchor: 0.5,
      x: tileMidpoint,
      y: tileMidpoint,
      visible: false,
      interactive: false,
      interactiveChildren: false,
      eventMode: 'none'
    });
  }

  private updateState(mode: MapAnalysisMode) {
    switch (mode) {
      case "moveCost": this.updateMovementCostState(); break;
      case "terrainType": this.updateTerrainTypeState(); break;
      case "warpGroup": this.updateWarpGroupState(); break;
      case "specialty": this.updateSpecialtyState(); break;
    }

    this.visible = this.tintGraphic.visible;
  }

  private hideChildren() {
    this.tintGraphic.visible = false;
    this.text.visible = false;
  }

  private updateMovementCostState() {
    const movementType: string = this.eventService?.movementType() ?? "";
    const movementCost: number = this.terrainType?.statGroups![0].movementCosts[movementType] ?? -1;

    if (movementCost < 0 || movementCost >= 99) {
      this.hideChildren();
      return;
    }

    this.tintGraphic.visible = true;
    this.text.visible = true;

    this.text.text = movementCost;
    this.text.style.fill = this.getMovementCostTextColor(movementCost);
    this.text.style.stroke = { color: this.getMovementCostTextStrokeColor(movementCost), width: 2 };
  }

  private getMovementCostTextColor(cost: number) : string {
    if (cost >= 5)
      return this.EXTREME_MOVE_COST_COLOR;
    if (cost >= 3)
      return this.HIGH_MOVE_COST_COLOR;
    if (cost >= 2)
      return this.MEDIUM_MOVE_COST_COLOR;

    return this.LOW_MOVE_COST_COLOR;
  }

  private getMovementCostTextStrokeColor(cost: number) {
    if (cost >= 2)
      return this.BLACK_STROKE_COLOR;

    return this.WHITE_STROKE_COLOR;
  }

  private updateTerrainTypeState() {
    if (this.terrainType === undefined) {
      this.hideChildren();
      return;
    }

    this.tintGraphic.visible = false;
  }

  private updateWarpGroupState() {
    if (this.terrainType === undefined) {
      this.hideChildren();
      return;
    }

    this.tintGraphic.visible = false;
  }

  private updateSpecialtyState() {
    if (this.terrainType === undefined) {
      this.hideChildren();
      return;
    }

    this.tintGraphic.visible = false;
  }
}