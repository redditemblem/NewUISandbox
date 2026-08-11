import { Component, inject, input, signal } from '@angular/core';
import { IUnit } from '../../../data/interfaces/unit/unit';
import { MatIconButton } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
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
import { UnitInventoryItem } from '../../unit-inventory-item/unit-inventory-item';
import { UnitSkill } from "../../unit-skill/unit-skill";
import { UnitWeaponRank } from "../../unit-weapon-rank/unit-weapon-rank";
import { UnitEmblem } from "../../unit-emblem/unit-emblem";
import { StatWithBuffIcon } from "../../stat-with-buff-icon/stat-with-buff-icon";
import { IBattleStyle } from '../../../data/interfaces/system/battle-style';
import { MapEventService } from '../../../services/map-event-service';

@Component({
  selector: 'unit-sidenav-display',
  imports: [MatIconButton, TextFieldsWithLabeledHeader, Currency, UnitTag, UnitHpBar, KeyValuePipe, ModifiedUnitStat, UnitStatusCondition, MatDivider, UnitInventoryItem, UnitSkill, UnitWeaponRank, UnitEmblem, StatWithBuffIcon, MatTooltipModule],
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

  constructor(protected teamDataService: TeamDataService, private eventService: MapEventService) {
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
  
  protected pairedUnitLink_OnClick(pairedUnitName: string) {
    this.eventService.switchDisplayedUnit(pairedUnitName);
  }

  protected dictionaryHasKeys(object: any) : boolean {
    if(object === null || object === undefined)
      return false;
    return Object.keys(object).length > 0;
  }

  protected doNotSortByKey() : number {
    //Don't actually want a real sort here, so just return 0 for all items.
    return 0;
  }

  // #region Section Label Functions

  protected getInventoryLabel() : string {
    return this.teamDataService.getInterfaceLabels()?.inventory ?? "";
  }

  protected getInventorySubsectionLabel(index: number) : string {
    return this.teamDataService.getInterfaceLabels()?.inventorySubsections[index] ?? "";
  }

  protected getClassLabel() : string {
    return this.teamDataService.getInterfaceLabels()?.class ?? "";
  }

  protected getBattleStyleLabel() : string { 
    return this.teamDataService.getInterfaceLabels()?.battleStyle ?? "";
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

  protected getStatusConditionsLabel() : string {
    return this.teamDataService.getInterfaceLabels()?.statusConditions ?? "";
  }

  // #endregion Section Label Functions

  protected getUnitAffiliation() : IAffiliation | undefined {
    return this.teamDataService.getAffiliationByName(this.unit().affiliation);
  }

  protected shouldFlipUnitSprite() : boolean {
    const aff = this.getUnitAffiliation();
    return aff?.flipUnitSprites ?? false;
  }

  protected getUnitBattleStyle(name: string) : IBattleStyle | undefined {
    return this.teamDataService.getBattleStyleByName(name);
  }

  protected getUnitClass(name: string) : IClass | undefined {
    return this.teamDataService.getClassByName(name);
  }
}
