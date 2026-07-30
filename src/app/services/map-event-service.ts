import { EventEmitter, Injectable, Output } from '@angular/core';
import { IUnit } from '../data/interfaces/unit/unit';
import { StringDictionary } from '../data/interfaces/common/dictionaries';

@Injectable({
  providedIn: 'root',
})
export class MapEventService {

  //These outputs can be subscribed to and will trigger on emit()
  @Output() downloadMapAsImage = new EventEmitter<void>();
  @Output() pinUnit = new EventEmitter<string>();
  @Output() unpinUnit = new EventEmitter<string>();
  @Output() updateCurrentTile = new EventEmitter<[number, number]>();

  /** Dictionary for tracking the pinned states of units */
  private unitPinnedStates: StringDictionary<boolean> = {};

  public triggerMapImageDownload() {
    this.downloadMapAsImage.emit();
  }

  /**
   *  Inverts the pinned state of `unitName` and emits a matching pin/unpin event.
   * 
   * @returns The updated pinned state of `unitName`
   */
  public toggleUnitPinnedState(unitName: string) : boolean {

    //Determine the current status, invert it, and update
    let isPinned = this.unitPinnedStates[unitName] ?? false;
    isPinned = !isPinned;

    this.unitPinnedStates[unitName] = isPinned;

    //Emit the correct event for subscribers
    if(isPinned) this.pinUnit.emit(unitName);
    else this.unpinUnit.emit(unitName);

    return isPinned;
  }

  /** @returns The current pinned state of `unitName` */
  public getPinnedStateForUnit(unitName: string) : boolean {
    return this.unitPinnedStates[unitName] ?? false;
  }

  public updateCurrentTileCoordinates(x: number, y: number) {
    this.updateCurrentTile.emit([x, y]);
  }
}
