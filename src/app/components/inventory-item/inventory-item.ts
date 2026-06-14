import { Component, inject, input } from '@angular/core';
import { UnitInventoryItem } from '../../interfaces/unit/unit-inventory-item';
import { Item } from '../../interfaces/system/item';
import { TeamDataService } from '../../services/team-data-service';
import { MatDivider } from '@angular/material/divider';
import { KeyValuePipe } from '@angular/common';
import { Engraving } from '../../interfaces/system/engraving';
import { Tag } from '../../interfaces/system/tag';

@Component({
  selector: 'inventory-item',
  imports: [MatDivider, KeyValuePipe],
  templateUrl: './inventory-item.html',
  styleUrl: './inventory-item.scss',
})
export class InventoryItem {
  item = input.required<UnitInventoryItem>();
  systemData : Item | undefined;
  isExpanded : boolean = false;

  constructor(public teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
  }

  ngOnChanges() {
    this.systemData = this.teamDataService.getItemByName(this.item().name);
    this.isExpanded = false;
  }

  toggleExpansion() : void {
    this.isExpanded = !this.isExpanded;
  }

  getEngravingByName(name: string) : Engraving | undefined {
    return this.teamDataService.getEngravingByName(name);
  }

  getTagByName(name: string) : Tag | undefined {
    return this.teamDataService.getTagByName(name);
  }

  formatUtilizedStatsText() : string {
    let utilized = this.systemData?.utilizedStats ?? [];
    let targeted = this.systemData?.targetedStats ?? [];

    if(utilized.length < 1)
      return "";
    
    let stats : string = utilized.join("/");
    if(targeted.length > 0)
      stats += " » " + targeted.join("/");

    return "(" + stats + ")";
  }

  sortStats() : number {
    return 0;
  }

}
