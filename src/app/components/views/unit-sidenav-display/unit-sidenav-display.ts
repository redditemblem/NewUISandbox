import { Component, inject, input, signal } from '@angular/core';
import { IUnit } from '../../../data/interfaces/unit/unit';
import { MatIconButton } from '@angular/material/button';
import { TeamDataService } from '../../../services/team-data-service';
import { TextFieldsWithLabeledHeader } from "../../text-fields-with-labeled-header/text-fields-with-labeled-header";
import { IAffiliation } from '../../../data/interfaces/system/affiliation';
import { IClass } from '../../../data/interfaces/system/class';
import { Currency } from '../../currency/currency';
import { UnitTag } from '../../unit-tag/unit-tag';
import { UnitHpBar } from '../../unit-hp-bar/unit-hp-bar';
import { KeyValuePipe } from '@angular/common';
import { ModifiedUnitStat } from '../../modified-unit-stat/modified-unit-stat';
import { UnitStatusCondition } from '../../unit-status-condition/unit-status-condition';
import { MatDivider } from '@angular/material/divider';
import { InventoryItem } from '../../inventory-item/inventory-item';
import { UnitSkill } from "../../unit-skill/unit-skill";
import { UnitWeaponRank } from "../../unit-weapon-rank/unit-weapon-rank";

@Component({
  selector: 'unit-sidenav-display',
  imports: [MatIconButton, TextFieldsWithLabeledHeader, Currency, UnitTag, UnitHpBar, KeyValuePipe, ModifiedUnitStat, UnitStatusCondition, MatDivider, InventoryItem, UnitSkill, UnitWeaponRank],
  templateUrl: './unit-sidenav-display.html',
  styleUrl: './unit-sidenav-display.scss',
})
export class UnitSidenavDisplay {
  unit = input.required<IUnit>();

  public isPinned = signal<boolean>(false);
  public isUnitInfoExpanded = signal<boolean>(false);
  public isStatsInfoExpanded = signal<boolean>(false);
  public isInventoryExpanded = signal<boolean>(true);
  public isEmblemExpanded = signal<boolean>(true);
  public isSkillsInfoExpanded = signal<boolean>(true);

  constructor(protected teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
  }

  ngOnChanges() {
    //Every time unit() changes, reset defaults
    this.isUnitInfoExpanded.set(false);
    this.isStatsInfoExpanded.set(false);
    this.isInventoryExpanded.set(true);
    this.isEmblemExpanded.set(true);
    this.isSkillsInfoExpanded.set(true);
  }

  protected toggleUnitInfoExpansion() { this.isUnitInfoExpanded.set(!this.isUnitInfoExpanded()); }
  protected toggleStatExpansion() { this.isStatsInfoExpanded.set(!this.isStatsInfoExpanded()); }
  protected toggleInventoryExpansion() { this.isInventoryExpanded.set(!this.isInventoryExpanded()); }
  protected toggleEmblemExpansion() { this.isEmblemExpanded.set(!this.isEmblemExpanded()); }
  protected toggleSkillsExpansion() { this.isSkillsInfoExpanded.set(!this.isSkillsInfoExpanded()); }
  
  protected dictionaryHasKeys(object: any) : boolean {
    if(object === null || object === undefined)
      return false;
    return Object.keys(object).length > 0;
  }

  protected doNotSortByKey() : number {
    //Don't actually want a real sort here, so just return 0 for all items.
    return 0;
  }

  protected getInventoryLabel() : string {
    return this.teamDataService.getInterfaceLabels()?.inventory ?? "";
  }

  protected getInventorySubsectionLabel(index: number) : string {
    return this.teamDataService.getInterfaceLabels()?.inventorySubsections[index] ?? "";
  }

  protected getEmblemLabel() : string {
    return this.teamDataService.getInterfaceLabels()?.emblem ?? "";
  }

  protected getSkillsLabel() : string {
    return this.teamDataService.getInterfaceLabels()?.skills ?? "";
  }

  protected getSkillSubsectionLabel(index: number) : string {
    return this.teamDataService.getInterfaceLabels()?.skillSubsections[index] ?? "";
  }

  protected getUnitAffiliation() : IAffiliation | undefined {
    return this.teamDataService.getAffiliationByName(this.unit().affiliation);
  }

  protected shouldFlipUnitSprite() : boolean {
    let aff = this.getUnitAffiliation();
    return aff?.flipUnitSprites ?? false;
  }

  protected getUnitClass(name: string) : IClass | undefined {
    return this.teamDataService.getClassByName(name);
  }
}
