import { Component, signal } from '@angular/core';
import { MapEventService } from '../../../services/map-event-service';

@Component({
  selector: 'map-tiles-sidenav',
  imports: [],
  templateUrl: './map-tiles-sidenav.html',
  styleUrl: './map-tiles-sidenav.scss',
})
export class MapTilesSidenav {

  public x = signal<number>(0);
  public y = signal<number>(0);

  constructor(public eventService: MapEventService) {

    //Subscribe to external events
    this.eventService.updateCurrentTile
      .subscribe(([x, y]) => this.updateTile(x, y));
  }

  private updateTile(x: number, y: number) {
    this.x.set(x);
    this.y.set(y);
  }
}
