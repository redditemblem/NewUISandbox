import { Container, FederatedPointerEvent, Graphics, Rectangle } from "pixi.js";
import { UnitContainer } from "./unit-container";
import { ITileState, MapEventService } from "../../../services/map-event-service";
import { ITile } from "../../../data/interfaces/map/tile";
import { effect, inject, Injector, runInInjectionContext } from "@angular/core";
import { TeamDataService } from "../../../services/team-data-service";
import { IUnit } from "../../../data/interfaces/unit/unit";
import { TileObjectContainer } from "./tile-object-container";
import { TileObjectLayer } from "../../../data/interfaces/system/tile-object";
import { ITileObjectInstance } from "../../../data/interfaces/map/tile-object-instance";

export class TileContainer extends Container {

  //Constants
  private readonly RANGE_MOV_COLOR: string = "#5cb4ef";
  private readonly RANGE_ATK_COLOR: string = "#d81b62";
  private readonly RANGE_UTIL_COLOR: string = "#9dff00";

  private readonly TILE_OBJECT_LOWER_Z_INDEX: number = 1;
  private readonly PAIRUP_UNIT_Z_INDEX: number = 2;
  private readonly UNIT_Z_INDEX: number = 3;
  private readonly TILE_OBJECT_UPPER_Z_INDEX = 4;

  //Internal attributes
  private injector: Injector;
  private teamDataService: TeamDataService | undefined;
  private eventService: MapEventService | undefined;

  public readonly tile: ITile;
  private tileDimensions: number = 16;
  private hitAreaDimensions: number = 0;

  private backgroundTint: Graphics | undefined;
  public unitContainer: UnitContainer | undefined;
  public pairupUnitContainer: UnitContainer | undefined;
  public interactiveTileObjects: TileObjectContainer[] = [];

  constructor(injector: Injector, tile: ITile, segmentWidth: number, segmentXOffset: number) {
    super({
      label: tile.coordinate.asText,
      interactive: false,
      interactiveChildren: false,
      //zIndex: ((tile.coordinate.y - 1) * segmentWidth) + tile.coordinate.x - segmentXOffset
    });

    this.injector = injector;
    this.tile = tile;

    runInInjectionContext(injector, () => {
      this.teamDataService = inject(TeamDataService);
      this.eventService = inject(MapEventService);

      const constants = this.teamDataService.getMapConstants();
      this.tileDimensions = constants?.tileSize ?? 16;

      //Monitor for tile state changes
      effect(() => {
        const state: ITileState = this.eventService!.getStateForTile(this.tile.coordinate);
        this.updateBackgroundTint(state);
      });
    });
  }

  public async init() {
    await Promise.all([
      this.createBackgroundTint(),
      this.createTileObjectContainers(),
      this.createUnitContainers(),
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

  private async createTileObjectContainers() {
    const tileObjectIDs: number[] = this.tile.tileObjectInstanceIDs ?? [];
    if (tileObjectIDs.length < 1) return;

    const containers: (TileObjectContainer | undefined)[] = await Promise.all(tileObjectIDs.map(async id => 
    {
      //Attempt to load the tile object by its id
      const tileObjectInst: ITileObjectInstance | undefined = this.teamDataService?.getTileObjectInstanceByID(id, this.tile.coordinate);
      if(tileObjectInst === undefined) {
          console.error(`Failed to locate tile object instance id ${id}.`);
          return undefined;
      }

      //Only render from the anchor coordinate
      if (tileObjectInst.anchorCoordinate.x !== this.tile.coordinate.x || tileObjectInst.anchorCoordinate.y !== this.tile.coordinate.y)
        return undefined;

      const container = new TileObjectContainer(this.injector, tileObjectInst);
      await container.init();

      let zIndex: number;
      switch (container.tileObject?.layer ?? TileObjectLayer.Below) {
        case TileObjectLayer.Below: zIndex = this.TILE_OBJECT_LOWER_Z_INDEX; break;
        case TileObjectLayer.Above: zIndex = this.TILE_OBJECT_UPPER_Z_INDEX; break;
      }
      container.zIndex = zIndex;

      this.addChild(container);
      return container;
    }));

    //Add hit box for tile objects with an attack range
    this.interactiveTileObjects = containers.filter(c => c !== undefined).filter(c => (c.tileObjectInstance?.attackRange ?? []).length > 0);
    if (this.interactiveTileObjects.length > 0) {
      const maxDimensions: number = Math.max(...this.interactiveTileObjects.map(to => to.objectDimensions));
      this.createHitArea(maxDimensions);
    }
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

    if (this.unitContainer !== undefined) {
      this.unitContainer.zIndex = this.UNIT_Z_INDEX;
      this.createHitArea(this.unitContainer.unitDimensions);
    }

    if (this.pairupUnitContainer !== undefined) {
      this.pairupUnitContainer.zIndex = this.PAIRUP_UNIT_Z_INDEX;

      //Offset both units' positions by 25%
      const offset: number = Math.floor(this.tileDimensions / 4);
      this.unitContainer?.position.set(offset, offset);
      this.pairupUnitContainer?.position.set(offset * -1, offset * -1);
    }

    runInInjectionContext(this.injector, () => {
      //Monitor for unit state changes
      effect(() => {
        let isPinned: boolean = this.eventService?.getPinnedStateForUnit(occupyingUnitName) ?? false;
        this.toggleUnitContainerPinnedStatus(this.unitContainer, isPinned);

        if (pairUpUnitName.length > 0) {
          isPinned = this.eventService?.getPinnedStateForUnit(pairUpUnitName) ?? false;
          this.toggleUnitContainerPinnedStatus(this.pairupUnitContainer, isPinned);
        }
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

  private createHitArea(dimensions: number) {
    //If we've already established a hit area for this tile, only replace it if this would be a larger hit area
    if (this.hitAreaDimensions >= dimensions) return;
    this.hitAreaDimensions = dimensions;

    this.interactive = true;
    this.eventMode = 'static';
    this.cursor = 'pointer';
    this.hitArea = new Rectangle(0, 0, dimensions, dimensions);
    
    this.on('pointerdown', this.TileContainer_PointerDown);
    this.on('pointerenter', this.TileContainer_OnPointerEnter);
    this.on('pointerleave', this.TileContainer_OnPointerLeave);
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
    if (unit !== undefined) {
      const isPinned: boolean = this.eventService?.toggleUnitPinnedState(unit) ?? false;
      if(isPinned)
        this.eventService?.switchDisplayedUnit(unit);
    }
    
    this.interactiveTileObjects.forEach(to => to.togglePinnedState());
  }

  private TileContainer_OnPointerEnter(event: FederatedPointerEvent) {
    this.unitContainer?.onPointerEnter();
    this.pairupUnitContainer?.onPointerEnter();
    this.interactiveTileObjects.forEach(to => to.onPointerEnter());
  }

  private TileContainer_OnPointerLeave(event: FederatedPointerEvent) {
    this.unitContainer?.onPointerLeave();
    this.pairupUnitContainer?.onPointerLeave();
    this.interactiveTileObjects.forEach(to => to.onPointerLeave());
  }

  private toggleUnitContainerPinnedStatus(container: UnitContainer | undefined, isPinned: boolean) {
    if (isPinned) container?.pinUnit();
    else container?.unpinUnit();
  }

  // #endregion Event Handlers
}