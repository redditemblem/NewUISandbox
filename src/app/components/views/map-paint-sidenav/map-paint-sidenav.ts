import { Component, inject } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MapEventService } from '../../../services/map-event-service';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule, MatLabel } from "@angular/material/input";

@Component({
  selector: 'map-paint-sidenav',
  imports: [MatListModule, MatIconModule, MatButtonToggleModule, MatLabel, MatInputModule],
  templateUrl: './map-paint-sidenav.html',
  styleUrl: './map-paint-sidenav.scss',
})
export class MapPaintSidenav {

  constructor(private eventService: MapEventService) {
    this.eventService = inject(MapEventService);
  }

  protected exportMapAsImage() {
    this.eventService.triggerMapImageDownload();
  }

  protected drawingTool_OnChange(event: MatButtonToggleChange) {

  }

  protected penWidth_OnChange(event: MatButtonToggleChange) {
    this.eventService.setPenWidth(event.value as number);
  }

  protected penColorPicker_OnChange(event: Event) {
    const inputElem = event.target as HTMLInputElement;
    this.eventService.setPenColor(inputElem.value as string);
  }
}
