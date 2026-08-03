import { Component, inject, OnInit, signal } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import { BreakpointService } from '../../../services/breakpoint-service';
import { MatTabsModule } from "@angular/material/tabs";
import { LinksSidenav } from "../links-sidenav/links-sidenav";
import { ConvoyDataService } from '../../../services/convoy-data-service';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { ConvoyItem } from '../../convoy-item/convoy-item';
import { IConvoyItem } from '../../../data/interfaces/storage/convoy/convoy-item';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { IItemSort } from '../../../data/interfaces/storage/item-sort';
import { IItem } from '../../../data/interfaces/system/item';

@Component({
  selector: 'convoy-view',
  imports: [MatSidenavModule, MatTabsModule, LinksSidenav, MatButtonModule, ConvoyItem, MatInputModule, MatSelectModule],
  templateUrl: './convoy-view.html',
  styleUrl: './convoy-view.scss',
})
export class ConvoyView implements OnInit {

  protected sortBy = signal<IItemSort | undefined>(undefined);

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

  protected getFilteredConvoyItemsList(): IConvoyItem[] {
    return this.convoyDataService.getConvoyItemsList()
      .filter(item =>
        true
      )
      .sort((a, b) => this.sortItems(a, b));
  }

  /** Sorts `unitA` and `unitB` alphabetically by name, case insensitive. */
  private sortItems(convoyItemA: IConvoyItem, convoyItemB: IConvoyItem) {
    const sortAttribute = this.sortBy()?.sortAttribute ?? '';

    //If no sort has been set yet, default to sorting by name
    if(sortAttribute.length < 1)
      return convoyItemA.name.toLowerCase().localeCompare(convoyItemB.name.toLowerCase());

    let sortValueA: string  = "";
    let sortValueB: string = "";
    if(this.sortBy()?.isDeepSort ?? false){
        const itemA = this.convoyDataService.getItemByName(convoyItemA.name);
        if(itemA !== undefined) 
          sortValueA = itemA[sortAttribute as keyof IItem] as string;
        
        const itemB = this.convoyDataService.getItemByName(convoyItemB.name);
        if(itemB !== undefined)
          sortValueB = itemB[sortAttribute as keyof IItem] as string;
    }
    else {
        sortValueA = convoyItemA[sortAttribute as keyof IConvoyItem] as string;
        sortValueB = convoyItemB[sortAttribute as keyof IConvoyItem] as string;
    }
            
    if(sortValueA.length === 0) return 1;
    if(sortValueB.length === 0) return -1;

    //If sort values are equal, subsort by name
    if(sortValueA === sortValueB) 
      return convoyItemA.name.toLowerCase().localeCompare(convoyItemB.name.toLowerCase());
    
    return sortValueA < sortValueB ? -1 : 1;
  }
}
