import { Component, inject } from '@angular/core';
import { TeamDataService } from '../../../services/team-data-service';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'map-links-sidenav',
  imports: [ MatListModule, RouterLink ],
  templateUrl: './map-links-sidenav.html',
  styleUrl: './map-links-sidenav.scss',
})
export class MapLinksSidenav {
  public teamName : string = "";

  constructor(public teamDataService: TeamDataService, public activatedRoute: ActivatedRoute) {
    this.teamDataService = inject(TeamDataService);
    this.activatedRoute = inject(ActivatedRoute);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.teamName = params['teamName'];
    });
  }

  getChapterPostUrl() : string {
    return this.teamDataService.getChapterPostUrl() ?? "";
  }

  showConvoyLink() : boolean {
    return this.teamDataService.isConvoyConfigured();
  }

  showShopLink() : boolean {
    return this.teamDataService.isShopConfigured();
  }
  
  getGoogleSheetUrl() : string {
    let worksheetID = this.teamDataService.getWorksheetID() ?? "";
    if(worksheetID.length < 1)
      return "";
    
    return `https://docs.google.com/spreadsheets/d/${worksheetID}/edit`;
  }
}
