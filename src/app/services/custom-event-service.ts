import { EventEmitter, Injectable, Output, signal } from '@angular/core';
import { IUnit } from '../data/interfaces/unit/unit';
import { StringDictionary } from '../data/interfaces/common/dictionaries';

@Injectable({
  providedIn: 'root',
})
export class CustomEventService {

  //These outputs can be subscribed to and will trigger on emit()
  @Output() downloadMapAsImage = new EventEmitter<void>();
  @Output() pinUnit = new EventEmitter<IUnit>();
  @Output() unpinUnit = new EventEmitter<IUnit>();

  private unitPinnedStatuses: StringDictionary<boolean> = {};

  public triggerMapImageDownload() {
    this.downloadMapAsImage.emit();
  }

  public toggleUnitPinnedState(unit: IUnit) : boolean {

    //Determine the current status, invert it, and update
    let isPinned = this.unitPinnedStatuses[unit.name] ?? false;
    isPinned = !isPinned;

    this.unitPinnedStatuses[unit.name] = isPinned;

    //Emit the correct event for subscribers
    if(isPinned) this.pinUnit.emit(unit);
    else this.unpinUnit.emit(unit);

    return isPinned;
  }
}
