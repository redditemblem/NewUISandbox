import { Component, inject, input } from '@angular/core';
import { IUnitInventoryItem } from '../../data/interfaces/unit/unit-inventory-item';
import { IItem } from '../../data/interfaces/system/item';
import { TeamDataService } from '../../services/team-data-service';
import { MatDivider } from '@angular/material/divider';
import { KeyValuePipe, NgClass } from '@angular/common';
import { IEngraving } from '../../data/interfaces/system/engraving';
import { ITag } from '../../data/interfaces/system/tag';
import { StatWithBuffIcon } from "../stat-with-buff-icon/stat-with-buff-icon";
import { ItemRangeShape } from "../../data/interfaces/system/item-range";
import { Engraving } from '../engraving/engraving';

@Component({
  selector: 'inventory-item',
  imports: [MatDivider, KeyValuePipe, StatWithBuffIcon, NgClass, Engraving],
  templateUrl: './inventory-item.html',
  styleUrl: './inventory-item.scss',
})
export class InventoryItem {
  //Expose enum for use in the class
  protected readonly ItemRangeShape = ItemRangeShape;

  item = input.required<IUnitInventoryItem>();
  systemData : IItem | undefined;
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

  getEngravingByName(name: string) : IEngraving | undefined {
    return this.teamDataService.getEngravingByName(name);
  }

  getTagByName(name: string) : ITag | undefined {
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

  hasNonZeroStatValue() : boolean {
    return Object.values(this.item().stats ?? {}).some(s => s.finalValue !== 0);
  }

  sortStats() : number {
    return 0;
  }
}
