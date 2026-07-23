import { Component, inject } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MapEventService } from '../../../services/map-event-service';

@Component({
  selector: 'map-paint-sidenav',
  imports: [MatListModule, MatIconModule],
  templateUrl: './map-paint-sidenav.html',
  styleUrl: './map-paint-sidenav.scss',
})
export class MapPaintSidenav {

  constructor(public eventService: MapEventService) {
    this.eventService = inject(MapEventService);
  }

  public exportMapAsImage() {
    this.eventService.triggerMapImageDownload();
  }
}
