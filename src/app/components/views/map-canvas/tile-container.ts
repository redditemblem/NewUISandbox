import { Container, Graphics } from "pixi.js";
import { UnitContainer } from "./unit-container";
import { ITileState, MapEventService } from "../../../services/map-event-service";
import { ITile } from "../../../data/interfaces/map/tile";
import { effect, inject, Injector, runInInjectionContext } from "@angular/core";
import { TeamDataService } from "../../../services/team-data-service";
import { IMapConstants } from "../../../data/interfaces/map/map-constants";

export class TileContainer extends Container {
  //Constants
  private readonly RANGE_MOV_COLOR: string = '#5cb4ef';
  private readonly RANGE_ATK_COLOR: string = '#d81b62';
  private readonly RANGE_UTIL_COLOR: string = '#9dff00';

  //Internal attributes
  private injector: Injector;
  public readonly tile: ITile;
  private constants: IMapConstants | undefined;

  private backgroundTint: Graphics | undefined;
  public unitContainer: UnitContainer | undefined;
  public pairupUnitContainer: UnitContainer | undefined;

  constructor(injector: Injector, tile: ITile) {
    super(); //call the parent Container() constructor

    this.injector = injector;
    this.tile = tile;

    //Set this container's base attributes
    this.label = this.tile.coordinate.asText;
    this.interactive = false;
    this.interactiveChildren = false;

    //Subscribe to tile state changes
    runInInjectionContext(injector, () => {
      const teamDataService = inject(TeamDataService);
      this.constants = teamDataService.getMapConstants();

      const eventService = inject(MapEventService);
      effect(() => {
        const state: ITileState = eventService.getStateForTile(this.tile.coordinate);
        this.updateBackgroundTint(state);
      });
    });
  }

  public async init() {
    await Promise.all([
      this.createBackgroundTint(),
      this.createUnitContainers()
    ]);
  }

  private async createBackgroundTint() {
    //Add a rectangle graphic for showing ranges
    const tileDimensions = this.constants?.tileSize ?? 16;
    const tint = new Graphics()
      .rect(0, 0, tileDimensions-1, tileDimensions-1)
      .fill({
        color: '#ffffff',
        alpha: 0.5
      });

    tint.visible = false; //hide by default

    this.backgroundTint = tint;
    this.addChild(this.backgroundTint);
  }

  /** Creates unit containers for all units on this tile. */
  private async createUnitContainers() {
    const occupyingUnitName: string = this.tile.unitData.occupyingUnitName ?? "";
    const pairUpUnitName: string = this.tile.unitData.pairedUnitName ?? "";

    //Only create units if this is a unit's anchor tile
    if(occupyingUnitName.length < 1 || !this.tile.unitData.isUnitAnchor)
      return;

    //Create unit containers in parallel
    const units = await Promise.all([
      this.createUnitContainer(occupyingUnitName, true),
      this.createUnitContainer(pairUpUnitName, false)
    ]);

    this.interactiveChildren = true;
    this.unitContainer = units[0];
    this.pairupUnitContainer = units[1];
  }

  /** Creates a new `UnitContainer` for `unitName` and adds it as a child. If `unitName` is an empty string, returns undefined instead. */
  private async createUnitContainer(unitName: string, enableInteraction: boolean) : Promise<UnitContainer | undefined> {
    if(unitName.length < 1) return undefined;

    const unit: UnitContainer = new UnitContainer(this.injector, unitName, enableInteraction);
    await unit.init();
    this.addChild(unit);

    return unit;
  }

  /** Sets the background tint color according to `state`. */
  private updateBackgroundTint(state: ITileState) {
    if(this.backgroundTint === undefined) return;

    let tint: string = "";
    if(state.movement > 0) { tint = this.RANGE_MOV_COLOR; }
    else if(state.attack > 0) { tint = this.RANGE_ATK_COLOR; }
    else if(state.utility > 0) { tint = this.RANGE_UTIL_COLOR; }

    //If we picked a tint color, update
    if(tint.length > 0) {
      this.backgroundTint.tint = tint;
      this.backgroundTint.visible = true;
    }
    else {
      this.backgroundTint.tint = '#ffffff';
      this.backgroundTint.visible = false;
    }
  }
}