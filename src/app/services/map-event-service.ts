import { EventEmitter, Injectable, Output, Signal, signal } from '@angular/core';
import { StringDictionary } from '../data/interfaces/common/dictionaries';

@Injectable({
  providedIn: 'root',
})
export class MapEventService {

  // #region Units Tab

  /** Internal dictionary for tracking the pinned state of units */
  private unitPinnedStates: StringDictionary<boolean> = {};

  @Output() pinUnit = new EventEmitter<string>();
  @Output() unpinUnit = new EventEmitter<string>();

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

  // #endregion Units Tab

  // #region Tiles Tab  

  @Output() updateCurrentTile = new EventEmitter<[number, number]>();

  public updateCurrentTileCoordinates(x: number, y: number) {
    this.updateCurrentTile.emit([x, y]);
  }

  // #endregion Tiles Tab

  // #region Paint Tab

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

  // #endregion Paint Tab
}
