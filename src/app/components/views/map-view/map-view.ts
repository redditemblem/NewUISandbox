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
import { MatFabButton } from '@angular/material/button';
import { LinksSidenav } from "../links-sidenav/links-sidenav";

@Component({
  selector: 'map-view',
  imports: [MatSidenav, MatSidenavContainer, MatSidenavContent, MatTab, MatTabGroup, MatTabLabel, MatFabButton, MapUnitsSidenav, MapTilesSidenav, MapDiceRollerSidenav, LinksSidenav],
  templateUrl: './map-view.html',
  styleUrl: './map-view.scss',
})
export class MapView {
  
  constructor(public route: ActivatedRoute, public breakpointService: BreakpointService, public themeService: ThemeService, public teamDataService: TeamDataService) {
    this.route = inject(ActivatedRoute);
    this.breakpointService = inject(BreakpointService);
    this.themeService = inject(ThemeService);
    this.teamDataService = inject(TeamDataService);

    var teamName = this.route.snapshot.paramMap.get("teamName") ?? "";
    this.teamDataService.loadDataForTeam(teamName);
  }
}
