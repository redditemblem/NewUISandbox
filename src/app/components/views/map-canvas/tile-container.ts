import { Container, FederatedPointerEvent, Graphics, Rectangle } from "pixi.js";
import { UnitContainer } from "./unit-container";
import { ITileState, MapEventService } from "../../../services/map-event-service";
import { ITile } from "../../../data/interfaces/map/tile";
import { effect, inject, Injector, runInInjectionContext } from "@angular/core";
import { TeamDataService } from "../../../services/team-data-service";
import { IUnit } from "../../../data/interfaces/unit/unit";

export class TileContainer extends Container {

  //Constants
  private readonly RANGE_MOV_COLOR: string = "#5cb4ef";
  private readonly RANGE_ATK_COLOR: string = "#d81b62";
  private readonly RANGE_UTIL_COLOR: string = "#9dff00";

  //Internal attributes
  private injector: Injector;
  private eventService: MapEventService | undefined;

  public readonly tile: ITile;
  private tileDimensions: number = 16;
  private readonly defaultZIndex: number;

  private backgroundTint: Graphics | undefined;
  public unitContainer: UnitContainer | undefined;
  public pairupUnitContainer: UnitContainer | undefined;

  constructor(injector: Injector, tile: ITile, segmentWidth: number, segmentXOffset: number) {
    super({
      label: tile.coordinate.asText,
      interactive: false,
      interactiveChildren: false
    });

    this.injector = injector;
    this.tile = tile;

    this.defaultZIndex = ((this.tile.coordinate.y - 1) * segmentWidth) + this.tile.coordinate.x - segmentXOffset;

    runInInjectionContext(injector, () => {
      const teamDataService = inject(TeamDataService);
      const constants = teamDataService.getMapConstants();
      this.tileDimensions = constants?.tileSize ?? 16;

      const eventService = inject(MapEventService);
      this.eventService = eventService;

      //Monitor for tile state changes
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

  /** Creates a partially transparent rectangle graphic for showing unit ranges. */
  private async createBackgroundTint() {
    const tint = new Graphics({ visible: false })
    .rect(1, 1, this.tileDimensions-1, this.tileDimensions-1)
    .fill({
      color: "#ffffff",
      alpha: 0.5
    });

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
      this.createUnitContainer(occupyingUnitName),
      this.createUnitContainer(pairUpUnitName)
    ]);

    this.unitContainer = units[0];
    this.pairupUnitContainer = units[1];

    //If there is a pair up unit, we need to reposition both units
    if (this.pairupUnitContainer !== undefined) {
      const offset: number = Math.floor(this.tileDimensions / 4); //25%

      this.unitContainer?.position.set(offset, offset);
      this.pairupUnitContainer?.position.set(offset * -1, offset * -1);
    }

    //Set up hitbox for interacting with units
    this.interactive = true;
    this.eventMode = 'static';
    this.cursor = 'pointer';
    this.hitArea = new Rectangle(0, 0, this.unitContainer?.unitDimensions, this.unitContainer?.unitDimensions);
    
    this.on('pointerdown', this.TileContainer_PointerDown);
    this.on('pointerenter', this.TileContainer_OnPointerEnter);
    this.on('pointerleave', this.TileContainer_OnPointerLeave);

    runInInjectionContext(this.injector, () => {
      //Monitor for unit state changes
      effect(() => {
        const isPinned: boolean = this.eventService?.getPinnedStateForUnit(occupyingUnitName) ?? false;
        this.toggleUnitContainerPinnedStatus(isPinned);
      });
    });
  }

  /** Creates a new `UnitContainer` for `unitName` and adds it as a child. If `unitName` is an empty string, returns undefined instead. */
  private async createUnitContainer(unitName: string) : Promise<UnitContainer | undefined> {
    if(unitName.length < 1) return undefined;

    const unit: UnitContainer = new UnitContainer(this.injector, unitName);
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
      this.backgroundTint.visible = false;
    }
  }

  // #region Event Handlers

  private TileContainer_PointerDown(event: FederatedPointerEvent) {
    const unit: IUnit | undefined = this.unitContainer?.unit;
    if (unit === undefined) return;

    const isPinned: boolean = this.eventService?.toggleUnitPinnedState(unit) ?? false;
    if(isPinned)
      this.eventService?.switchDisplayedUnit(unit);
  }

  private toggleUnitContainerPinnedStatus(isPinned: boolean) {
    if (isPinned) this.unitContainer?.pinUnit();
    else this.unitContainer?.unpinUnit();
  }

  private TileContainer_OnPointerEnter(event: FederatedPointerEvent) {
    this.unitContainer?.onPointerEnter();
    this.pairupUnitContainer?.onPointerEnter();
  }

  private TileContainer_OnPointerLeave(event: FederatedPointerEvent) {
    this.unitContainer?.onPointerLeave();
    this.pairupUnitContainer?.onPointerLeave();
  }

  // #endregion Event Handlers
}