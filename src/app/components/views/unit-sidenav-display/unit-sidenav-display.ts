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
import { UnitBattalion } from '../../unit-battalion/unit-battalion';

@Component({
  selector: 'unit-sidenav-display',
  imports: [MatIconButton, TextFieldsWithLabeledHeader, Currency, UnitTag, UnitHpBar, KeyValuePipe, ModifiedUnitStat, UnitStatusCondition, MatDivider, UnitInventoryItem, UnitSkill, UnitWeaponRank, UnitEmblem, StatWithBuffIcon, MatTooltipModule, UnitBattalion],
  templateUrl: './unit-sidenav-display.html',
  styleUrl: './unit-sidenav-display.scss',
})
export class UnitSidenavDisplay {
  unit = input.required<IUnit>();

  protected isPinned = signal<boolean>(false);
  protected isUnitInfoExpanded = signal<boolean>(false);
  protected isStatsInfoExpanded = signal<boolean>(false);
  protected isInventoryExpanded = signal<boolean>(true);
  protected isEmblemExpanded = signal<boolean>(true);
  protected isBattalionExpanded = signal<boolean>(true); 
  protected isSkillsInfoExpanded = signal<boolean>(true);

  constructor(protected teamDataService: TeamDataService, private eventService: MapEventService) {
    this.teamDataService = inject(TeamDataService);
  }

  ngOnChanges() {
    //Every time unit() changes, reset expansion defaults
    this.isUnitInfoExpanded.set(false);
    this.isStatsInfoExpanded.set(false);
    this.isInventoryExpanded.set(true);
    this.isEmblemExpanded.set(true);
    this.isBattalionExpanded.set(true);
    this.isSkillsInfoExpanded.set(true);
  }

  protected toggleUnitInfoExpansion() { this.isUnitInfoExpanded.set(!this.isUnitInfoExpanded()); }
  protected toggleStatExpansion() { this.isStatsInfoExpanded.set(!this.isStatsInfoExpanded()); }
  protected toggleInventoryExpansion() { this.isInventoryExpanded.set(!this.isInventoryExpanded()); }
  protected toggleEmblemExpansion() { this.isEmblemExpanded.set(!this.isEmblemExpanded()); }
  protected toggleBattalionExpansion() { this.isBattalionExpanded.set(!this.isBattalionExpanded()); }
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
