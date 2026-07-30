import { Component, inject, input, OnChanges, signal } from '@angular/core';
import { IUnitInventoryItem } from '../../data/interfaces/unit/unit-inventory-item';
import { IItem } from '../../data/interfaces/system/item';
import { TeamDataService } from '../../services/team-data-service';
import { MatDivider } from '@angular/material/divider';
import { KeyValuePipe } from '@angular/common';
import { IEngraving } from '../../data/interfaces/system/engraving';
import { ITag } from '../../data/interfaces/system/tag';
import { StatWithBuffIcon } from "../stat-with-buff-icon/stat-with-buff-icon";
import { ItemRangeShape } from "../../data/interfaces/system/item-range";
import { Engraving } from '../engraving/engraving';

@Component({
  selector: 'unit-inventory-item',
  imports: [MatDivider, KeyValuePipe, StatWithBuffIcon, Engraving],
  templateUrl: './unit-inventory-item.html',
  styleUrl: './unit-inventory-item.scss',
})
export class UnitInventoryItem implements OnChanges {
  //Expose enum for use in the class
  protected readonly ItemRangeShape = ItemRangeShape;

  public item = input.required<IUnitInventoryItem>();
  
  protected systemData = signal<IItem | undefined>(undefined);
  protected isExpanded = signal<boolean>(false);

  constructor(private teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
  }

  ngOnChanges() {
    this.systemData.set(this.teamDataService.getItemByName(this.item().name));
    this.isExpanded.set(false);
  }

  protected getEngravingByName(name: string) : IEngraving | undefined {
    return this.teamDataService.getEngravingByName(name);
  }

  protected getTagByName(name: string) : ITag | undefined {
    return this.teamDataService.getTagByName(name);
  }

  protected formatUtilizedStatsText() : string {
    const utilized = this.systemData()?.utilizedStats ?? [];
    const targeted = this.systemData()?.targetedStats ?? [];

    if(utilized.length < 1)
      return "";
    
    let stats : string = utilized.join("/");
    if(targeted.length > 0)
      stats += " » " + targeted.join("/");

    return "(" + stats + ")";
  }

  protected hasNonZeroStatValue() : boolean {
    return Object.values(this.item().stats ?? {}).some(s => s.finalValue !== 0);
  }

  protected sortStats() : number {
    return 0;
  }
}
