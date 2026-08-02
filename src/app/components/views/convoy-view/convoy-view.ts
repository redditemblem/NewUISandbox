import { Component, inject, OnInit } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import { BreakpointService } from '../../../services/breakpoint-service';
import { MatTabsModule } from "@angular/material/tabs";
import { LinksSidenav } from "../links-sidenav/links-sidenav";
import { ConvoyDataService } from '../../../services/convoy-data-service';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'convoy-view',
  imports: [MatSidenavModule, MatTabsModule, LinksSidenav, MatButtonModule],
  templateUrl: './convoy-view.html',
  styleUrl: './convoy-view.scss',
})
export class ConvoyView implements OnInit {

  constructor(private route: ActivatedRoute, protected breakpointService: BreakpointService, protected convoyDataService: ConvoyDataService) {
    this.route = inject(ActivatedRoute);
    this.breakpointService = inject(BreakpointService);
    this.convoyDataService = inject(ConvoyDataService);
  }

  ngOnInit() {
    this.loadDataForTeam();
  }

  private async loadDataForTeam() { 
    const teamName = this.route.snapshot.paramMap.get("teamName") ?? "";
    await this.convoyDataService.loadDataForTeam(teamName);
  }
}
