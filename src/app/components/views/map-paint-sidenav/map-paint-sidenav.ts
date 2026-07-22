import { Component, inject } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { CustomEventService } from '../../../services/custom-event-service';

@Component({
  selector: 'map-paint-sidenav',
  imports: [MatListModule, MatIconModule],
  templateUrl: './map-paint-sidenav.html',
  styleUrl: './map-paint-sidenav.scss',
})
export class MapPaintSidenav {

  constructor(public eventService: CustomEventService) {
    this.eventService = inject(CustomEventService);
  }

  public exportMapAsImage() {
    this.eventService.triggerMapImageDownload();
  }
}
