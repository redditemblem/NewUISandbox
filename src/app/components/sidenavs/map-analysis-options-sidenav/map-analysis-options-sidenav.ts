import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MapAnalysisEventService } from '../../../services/map-analysis-event-service';
import { MapAnalysisDataService } from '../../../services/map-analysis-data-service';
import { MatDivider } from '@angular/material/divider';
import { TileTerrainType } from '../../tile-terrain-type/tile-terrain-type';

@Component({
  selector: 'map-analysis-options-sidenav',
  imports: [MatInputModule, MatSelectModule, MatDivider, TileTerrainType],
  templateUrl: './map-analysis-options-sidenav.html',
  styleUrl: './map-analysis-options-sidenav.scss',
})
export class MapAnalysisOptionsSidenav {

  constructor(protected readonly analysisDataService: MapAnalysisDataService, protected readonly eventService: MapAnalysisEventService) {
    this.analysisDataService = inject(MapAnalysisDataService);
    this.eventService = inject(MapAnalysisEventService);
  }
}
