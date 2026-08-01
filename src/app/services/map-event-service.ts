import { EventEmitter, Injectable, Output, Signal, signal } from '@angular/core';
import { StringDictionary } from '../data/interfaces/common/dictionaries';

@Injectable({
  providedIn: 'root',
})
export class MapEventService {

  /** Dictionary for tracking the pinned states of units */
  private unitPinnedStates: StringDictionary<boolean> = {};

  //These outputs can be subscribed to and will trigger on emit()
  @Output() downloadMapAsImage = new EventEmitter<void>();
  @Output() pinUnit = new EventEmitter<string>();
  @Output() unpinUnit = new EventEmitter<string>();
  @Output() updateCurrentTile = new EventEmitter<[number, number]>();
  @Output() updatePaintMode = new EventEmitter<boolean>();
  
  private penColor = signal<string>('#000000');
  public drawingPenColor: Signal<string> = this.penColor.asReadonly();

  private penWidth = signal<number>(2);
  public drawingPenWidth: Signal<number> = this.penWidth.asReadonly();

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

  public setPaintMode(inPaintMode: boolean) {
    this.updatePaintMode.emit(inPaintMode);
  }

  public setPenColor(hexCode: string) {
    this.penColor.set(hexCode);
  }

  public setPenWidth(width: number) {
    this.penWidth.set(width);
  }
}
