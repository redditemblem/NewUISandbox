import { Component, inject, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MapDiceRollerSidenav } from '../map-dice-roller-sidenav/map-dice-roller-sidenav';
import { MapUnitsSidenav } from '../map-units-sidenav/map-units-sidenav';
import { MapTilesSidenav } from '../map-tiles-sidenav/map-tiles-sidenav';
import { BreakpointService } from '../../../services/breakpoint-service';
import { ThemeService } from '../../../services/theme-service';
import { TeamDataService } from '../../../services/team-data-service';
import { ActivatedRoute } from '@angular/router';
import { MatFabButton, MatAnchor } from '@angular/material/button';
import { LinksSidenav } from "../links-sidenav/links-sidenav";
import { MapSegment } from '../map-segment/map-segment';
import { IMapSegment } from '../../../data/interfaces/map/map-segment';
import { MatDivider } from "@angular/material/divider";
import { MapPaintSidenav } from "../map-paint-sidenav/map-paint-sidenav";

@Component({
  selector: 'map-view',
  imports: [MatSidenavModule, MatTabsModule, MatFabButton, MapUnitsSidenav, MapTilesSidenav, MapDiceRollerSidenav, LinksSidenav, MapSegment, MatAnchor, MatDivider, MapPaintSidenav],
  templateUrl: './map-view.html',
  styleUrl: './map-view.scss',
})
export class MapView {
  
  protected currentSegment = signal<IMapSegment | undefined>(undefined);

  constructor(public route: ActivatedRoute, public breakpointService: BreakpointService, public themeService: ThemeService, public teamDataService: TeamDataService) {
    this.route = inject(ActivatedRoute);
    this.breakpointService = inject(BreakpointService);
    this.themeService = inject(ThemeService);
    this.teamDataService = inject(TeamDataService);

    this.loadDataForTeam();
  }

  protected async loadDataForTeam() { 
    const teamName = this.route.snapshot.paramMap.get("teamName") ?? "";
    await this.teamDataService.loadDataForTeam(teamName);

    const firstSegment = this.teamDataService.mapData().map?.segments[0];
    if(firstSegment !== undefined)
      this.setCurrentSegment(firstSegment);
  }

  protected SegmentTabs_selectedTabChange(event: MatTabChangeEvent) {
    const segment: IMapSegment | undefined = this.teamDataService.mapData().map?.segments[event.index];
    if(segment === undefined)
      return;

    this.setCurrentSegment(segment);
  }

  protected setCurrentSegment(segment: IMapSegment) { 
    this.currentSegment.set(segment);
  }
}
