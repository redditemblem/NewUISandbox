import { Component, inject, input } from '@angular/core';
import { UnitInventoryItem } from '../../interfaces/unit/unit-inventory-item';
import { Item } from '../../interfaces/system/item';
import { TeamDataService } from '../../services/team-data-service';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'inventory-item',
  imports: [MatExpansionModule],
  templateUrl: './inventory-item.html',
  styleUrl: './inventory-item.scss',
})
export class InventoryItem {
  item = input.required<UnitInventoryItem>();
  systemData : Item | undefined;

  constructor(public teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
  }

  ngOnChanges() {
    this.systemData = this.teamDataService.getItemByName(this.item().name);
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
}
