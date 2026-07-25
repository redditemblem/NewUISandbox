import { Component, inject } from '@angular/core';
import { TeamListService } from '../../../services/team-list-service';
import { TeamListing } from '../../team-listing/team-listing';
import { BreakpointService } from '../../../services/breakpoint-service';
import { LoadingIcon } from "../../loading-icon/loading-icon";
import { ITeamData } from '../../../data/interfaces/team-data';
import { ThemeService } from '../../../services/theme-service';
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";


@Component({
  selector: 'home',
  imports: [TeamListing, LoadingIcon, MatListModule, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home{
  
  protected readonly teamExample: ITeamData;

  constructor(protected breakpointService: BreakpointService, protected themeService: ThemeService, protected teamListService: TeamListService){
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
