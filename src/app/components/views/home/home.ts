import { Component, inject } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { TeamListService } from '../../../services/team-list-service';
import { TeamListing } from '../../team-listing/team-listing';
import { BreakpointService } from '../../../services/breakpoint-service';
import { LoadingIcon } from "../../loading-icon/loading-icon";
import { TeamData } from '../../../interfaces/team-data';
import { ThemeService } from '../../../services/theme-service';


@Component({
  selector: 'home',
  imports: [TeamListing, NgClass, NgStyle, LoadingIcon],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home{
  
  public teamExample: TeamData;

  constructor(public breakpointService: BreakpointService, public themeService: ThemeService, public teamListService: TeamListService){
    this.breakpointService = inject(BreakpointService);
    this.themeService = inject(ThemeService);
    this.teamListService = inject(TeamListService);

    //Mock out the data for the example team
    this.teamExample = { 
      'teamName': 'Team Example',
      'showConvoyLink': true,
      'showShopLink': true
    };
  }
}
