import { Component, inject, input } from '@angular/core';
import { IUnit } from '../../../data/interfaces/unit/unit';
import { MatIconButton } from '@angular/material/button';
import { TeamDataService } from '../../../services/team-data-service';
import { TextFieldsWithLabeledHeader } from "../../text-fields-with-labeled-header/text-fields-with-labeled-header";
import { IAffiliation } from '../../../data/interfaces/system/affiliation';
import { IClass } from '../../../data/interfaces/system/class';
import { Currency } from '../../currency/currency';
import { UnitTag } from '../../unit-tag/unit-tag';
import { UnitHpBar } from '../../unit-hp-bar/unit-hp-bar';
import { KeyValuePipe, NgClass } from '@angular/common';
import { ModifiedUnitStat } from '../../modified-unit-stat/modified-unit-stat';
import { UnitStatusCondition } from '../../unit-status-condition/unit-status-condition';
import { MatDivider } from '@angular/material/divider';
import { InventoryItem } from '../../inventory-item/inventory-item';
import { UnitSkill } from "../../unit-skill/unit-skill";
import { CustomEventService } from '../../../services/custom-event-service';

@Component({
  selector: 'unit-sidenav-display',
  imports: [MatIconButton, TextFieldsWithLabeledHeader, Currency, UnitTag, UnitHpBar, KeyValuePipe, ModifiedUnitStat, UnitStatusCondition, MatDivider, InventoryItem, UnitSkill, NgClass],
  templateUrl: './unit-sidenav-display.html',
  styleUrl: './unit-sidenav-display.scss',
})
export class UnitSidenavDisplay {
  unit = input.required<IUnit>();

  //Default states
  public isUnitInfoExpanded : boolean = false;
  public isStatsInfoExpanded : boolean = false;
  public isInventoryExpanded : boolean = true;
  public isSkillsInfoExpanded : boolean = true;

  constructor(public teamDataService: TeamDataService, public eventService: CustomEventService) {
    this.teamDataService = inject(TeamDataService);
    this.eventService = inject(CustomEventService);
  }

  ngOnChanges() {
    //Every time unit() changes, reset expansion statuses
    this.isUnitInfoExpanded = false;
    this.isStatsInfoExpanded = false;
    this.isInventoryExpanded = true;
    this.isSkillsInfoExpanded = true;
  }

  toggleUnitPinnedStatus() : void { this.eventService.toggleUnitPinnedState(this.unit()); }
  toggleUnitInfoExpansion() : void { this.isUnitInfoExpanded = !this.isUnitInfoExpanded; }
  toggleStatExpansion() : void { this.isStatsInfoExpanded = !this.isStatsInfoExpanded; }
  toggleInventoryExpansion() : void { this.isInventoryExpanded = !this.isInventoryExpanded; }
  toggleSkillsExpansion() : void { this.isSkillsInfoExpanded = !this.isSkillsInfoExpanded; }
  

  sortModifiedUnitStat() : number {
    //Don't actually want a real sort here, so just return 0 for all items.
    return 0;
  }

  getInventoryLabel() : string {
    return this.teamDataService.getInterfaceLabels()?.inventory ?? "";
  }

  getInventorySubsectionLabel(index: number) : string {
    return this.teamDataService.getInterfaceLabels()?.inventorySubsections[index] ?? "";
  }

  getSkillsLabel() : string {
    return this.teamDataService.getInterfaceLabels()?.skills ?? "";
  }

  getSkillSubsectionLabel(index: number) : string {
    return this.teamDataService.getInterfaceLabels()?.skillSubsections[index] ?? "";
  }

  getUnitAffiliation() : IAffiliation | undefined {
    return this.teamDataService.getAffiliationByName(this.unit().affiliation);
  }

  shouldFlipUnitSprite() : boolean {
    let aff = this.getUnitAffiliation();
    return aff?.flipUnitSprites ?? false;
  }

  getUnitClass(name: string) : IClass | undefined {
    return this.teamDataService.getClassByName(name);
  }
}
