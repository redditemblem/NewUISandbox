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

  private unitPinnedStatuses: StringDictionary<boolean> = {};

  public triggerMapImageDownload() {
    this.downloadMapAsImage.emit();
  }

  public toggleUnitPinnedState(unitName: string) : boolean {

    //Determine the current status, invert it, and update
    let isPinned = this.unitPinnedStatuses[unitName] ?? false;
    isPinned = !isPinned;

    this.unitPinnedStatuses[unitName] = isPinned;

    //Emit the correct event for subscribers
    if(isPinned) this.pinUnit.emit(unitName);
    else this.unpinUnit.emit(unitName);

    return isPinned;
  }
}
