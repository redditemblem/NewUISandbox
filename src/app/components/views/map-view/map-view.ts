import { Component, inject, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MapDiceRollerSidenav } from '../map-dice-roller-sidenav/map-dice-roller-sidenav';
import { MapUnitsSidenav } from '../map-units-sidenav/map-units-sidenav';
import { MapTilesSidenav } from '../map-tiles-sidenav/map-tiles-sidenav';
import { BreakpointService } from '../../../services/breakpoint-service';
import { ThemeService } from '../../../services/theme-service';
import { TeamDataService } from '../../../services/team-data-service';
import { ActivatedRoute } from '@angular/router';
import { MatFabButton } from '@angular/material/button';
import { LinksSidenav } from "../links-sidenav/links-sidenav";
import { MapCanvas } from '../../map-canvas/map-canvas';
import { IMapSegment } from '../../../data/interfaces/map/map-segment';
import { MapPaintSidenav } from "../map-paint-sidenav/map-paint-sidenav";
import { MapEventService } from '../../../services/map-event-service';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'map-view',
  imports: [MatSidenavModule, MatTabsModule, MatFabButton, MapUnitsSidenav, MapTilesSidenav, MapDiceRollerSidenav, LinksSidenav, MapCanvas, MapPaintSidenav, MatIcon],
  templateUrl: './map-view.html',
  styleUrl: './map-view.scss',
})
export class MapView implements OnInit {
  
  constructor(private readonly route: ActivatedRoute, protected readonly breakpointService: BreakpointService, private readonly themeService: ThemeService, protected readonly teamDataService: TeamDataService, protected readonly eventService: MapEventService) {
    this.route = inject(ActivatedRoute);
    this.breakpointService = inject(BreakpointService);
    this.themeService = inject(ThemeService);
    this.teamDataService = inject(TeamDataService);
    this.eventService = inject(MapEventService);
  }

  async ngOnInit(): Promise<void> {
    const teamName = this.route.snapshot.paramMap.get("teamName") ?? "";
    await this.teamDataService.loadDataForTeam(teamName);

    const firstSegment = this.teamDataService.mapData().map?.segments[0];
    if(firstSegment !== undefined)
      this.eventService.updateSelectedSegment(firstSegment);
  }

  protected SidebarTabs_selectedTabChange(event: MatTabChangeEvent) {
    this.eventService.updatePaintMode(event.tab.ariaLabel === "Paintbrush");
  }

  protected SegmentTabs_selectedTabChange(event: MatTabChangeEvent) {
    const segment: IMapSegment | undefined = this.teamDataService.mapData().map?.segments[event.index];
    if(segment === undefined) return;

    this.eventService.updateSelectedSegment(segment);
  }
}
