import { Component, inject } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MapEventService } from '../../../services/map-event-service';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from "@angular/material/input";
import { ThemeService } from '../../../services/theme-service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'map-paint-sidenav',
  imports: [MatListModule, MatIconModule, MatButtonToggleModule, MatInputModule, MatButtonModule],
  templateUrl: './map-paint-sidenav.html',
  styleUrl: './map-paint-sidenav.scss',
})
export class MapPaintSidenav {

  constructor(protected themeService: ThemeService, private eventService: MapEventService) {
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

  protected setPenColor(color: string) {
    this.eventService.setPenColor(color);
  }

  protected eraseAllPaint() {
    this.eventService.eraseAllPaint();
  }

  protected undoLastLine() {
    this.eventService.undoLastLine();
  }
}
