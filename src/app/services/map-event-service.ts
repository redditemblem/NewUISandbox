import { EventEmitter, Injectable, Output, Signal, signal } from '@angular/core';
import { StringDictionary } from '../data/interfaces/common/dictionaries';
import { IUnit } from '../data/interfaces/unit/unit';
import { ICoordinate } from '../data/interfaces/map/coordinate';
import { ITile } from '../data/interfaces/map/tile';
import { IMapSegment } from '../data/interfaces/map/map-segment';

@Injectable({
  providedIn: 'root',
})
export class MapEventService {

  // #region Pinning Units

  @Output() switchDisplayToUnit = new EventEmitter<IUnit>();

  public switchDisplayedUnit(unit: IUnit) {
    this.switchDisplayToUnit.emit(unit);
  }

  private pinStates = signal<StringDictionary<boolean>>({});
  public readonly unitPinStates = this.pinStates.asReadonly();

  private tileStates = signal<StringDictionary<ITileState>>({});
  public readonly tileDisplayStates = this.tileStates.asReadonly();

  /**
   *  
   */
  public toggleUnitPinnedState(unit: IUnit) {
    const name: string = unit.name;
    const isPinned: boolean = this.getPinnedStateForUnit(unit.name);

    this.pinStates.update(dict => {
      dict[name] = !isPinned;
      return {...dict};
    });

    //Update tile states based on unit's ranges
    const movRange: ICoordinate[] = unit.ranges.movement ?? [];
    const atkRange: ICoordinate[] = unit.ranges.attack ?? [];
    const utilRange: ICoordinate[] = unit.ranges.utility ?? [];

    const modifier: number = (isPinned ? -1 : 1);
    this.tileStates.update(dict => {
      
      movRange.forEach(coord => {
        const state: ITileState = dict[coord.asText] ?? this.getEmptyTileState();
        state.movement = Math.max(0, state.movement + modifier);

        dict[coord.asText] = state;
      });

      atkRange.forEach(coord => {
        const state: ITileState = dict[coord.asText] ?? this.getEmptyTileState();
        state.attack = Math.max(0, state.attack + modifier);

        dict[coord.asText] = state;
      });

      utilRange.forEach(coord => {
        const state: ITileState = dict[coord.asText] ?? this.getEmptyTileState();
        state.utility = Math.max(0, state.utility + modifier);

        dict[coord.asText] = state;
      });

      return {...dict};
    });
  }

  /** @returns The current pinned state of `unitName` */
  public getPinnedStateForUnit(unitName: string) : boolean {
    return this.pinStates()[unitName] ?? false;
  }

  public getStateForTile(coordinate: ICoordinate) : ITileState {
    return this.tileStates()[coordinate.asText] ?? this.getEmptyTileState();
  }

  //** Returns a new `ITileState` with all values set to 0. */
  private getEmptyTileState(): ITileState {
    return {
      movement: 0,
      attack: 0,
      utility: 0
    }
  }

  // #endregion Pinning Units

  // #region Highlighted Tile  

  private segment = signal<IMapSegment | undefined>(undefined);
  public readonly selectedSegment = this.segment.asReadonly();

  private tile = signal<ITile | undefined>(undefined);
  public readonly highlightedTile = this.tile.asReadonly();

  public updateSelectedSegment(segment: IMapSegment) {
    this.segment.set(segment);
  }

  public updateHighlightedTile(tile: ITile) {
    //Don't update if this is already the current tile
    if (this.tile()?.coordinate.x == tile.coordinate.x
     && this.tile()?.coordinate.y == tile.coordinate.y)
     return;

    this.tile.set(tile);
  }

  // #endregion Highlighted Tile

  // #region Paint Mode

  @Output() downloadMapAsImage = new EventEmitter<void>();
  @Output() updatePaintMode = new EventEmitter<boolean>();
  @Output() clearPaintContainer = new EventEmitter();
  @Output() undoLastPaintContainerLine = new EventEmitter();

  private penColor = signal<string>('#000000');
  public drawingPenColor: Signal<string> = this.penColor.asReadonly();

  private penWidth = signal<number>(2);
  public drawingPenWidth: Signal<number> = this.penWidth.asReadonly();

  public triggerMapImageDownload() {
    this.downloadMapAsImage.emit();
  }

  public setPaintMode(inPaintMode: boolean) {
    this.updatePaintMode.emit(inPaintMode);
  }

  public setPenColor(colorCode: string) {
    this.penColor.set(colorCode);
  }

  public setPenWidth(width: number) {
    this.penWidth.set(width);
  }

  public eraseAllPaint() {
    this.clearPaintContainer.emit();
  }

  public undoLastLine() {
    this.undoLastPaintContainerLine.emit();
  }

  // #endregion Paint Mode
}

export interface ITileState {
  movement: number,
  attack: number,
  utility: number
}