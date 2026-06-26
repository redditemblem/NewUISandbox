import { Component, inject, input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'links-sidenav',
  imports: [ MatListModule, RouterLink, MatIcon ],
  templateUrl: './links-sidenav.html',
  styleUrl: './links-sidenav.scss',
})
export class LinksSidenav {
  googleWorksheetID = input<string | undefined>(undefined);
  chapterPostUrl = input<string | undefined>(undefined);
  showConvoyLink = input<boolean>(false);
  showShopLink = input<boolean>(false);
  showMapAnalyzerLink = input<boolean>(false);
  
  public teamName : string = "";

  constructor(public activatedRoute: ActivatedRoute) {
    this.activatedRoute = inject(ActivatedRoute);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.teamName = params['teamName'];
    });
  }
  
  getGoogleSheetUrl() : string {
    return `https://docs.google.com/spreadsheets/d/${this.googleWorksheetID()}/edit`;
  }
}
