import { Component, inject } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatTab, MatTabGroup, MatTabLabel } from '@angular/material/tabs';
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
import { MapSegment as IMapSegment } from '../../../interfaces/map/map-segment';
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'map-view',
  imports: [MatSidenav, MatSidenavContainer, MatSidenavContent, MatTab, MatTabGroup, MatTabLabel, MatFabButton, MapUnitsSidenav, MapTilesSidenav, MapDiceRollerSidenav, LinksSidenav, MapSegment, MatAnchor, MatDivider],
  templateUrl: './map-view.html',
  styleUrl: './map-view.scss',
})
export class MapView {
  
  public currentSegment : IMapSegment | undefined;

  constructor(public route: ActivatedRoute, public breakpointService: BreakpointService, public themeService: ThemeService, public teamDataService: TeamDataService) {
    this.route = inject(ActivatedRoute);
    this.breakpointService = inject(BreakpointService);
    this.themeService = inject(ThemeService);
    this.teamDataService = inject(TeamDataService);

    this.loadDataForTeam();
  }

  public async loadDataForTeam() { 
    let teamName = this.route.snapshot.paramMap.get("teamName") ?? "";
    await this.teamDataService.loadDataForTeam(teamName);

    let firstSegment = this.teamDataService.mapData().map?.segments[0];
    if(firstSegment !== undefined) {
      this.setCurrentSegment(firstSegment);
    }
  }

  public setCurrentSegment(segment: IMapSegment) { 
    this.currentSegment = segment;
  }
}
