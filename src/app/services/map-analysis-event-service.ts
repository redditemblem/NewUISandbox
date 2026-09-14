import { Injectable, signal } from '@angular/core';
import { IMapSegment } from '../data/interfaces/map/map-segment';

@Injectable({
  providedIn: 'root',
})
export class MapAnalysisEventService {

  /** Fully resets values stored in the event service back to their default state. */
  public reset() {
    this.segment.set(undefined);
  }

  // #region Selected Segment and Tile  

  private segment = signal<IMapSegment | undefined>(undefined);
  public readonly selectedSegment = this.segment.asReadonly();

  public updateSelectedSegment(segment: IMapSegment) {
    this.segment.set(segment);
  }

  // #endregion Selected Segment and Tile
}
