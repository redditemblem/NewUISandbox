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
import { MapEventService } from '../../../services/map-event-service';

@Component({
  selector: 'unit-sidenav-display',
  imports: [MatIconButton, TextFieldsWithLabeledHeader, Currency, UnitTag, UnitHpBar, KeyValuePipe, ModifiedUnitStat, UnitStatusCondition, MatDivider, InventoryItem, UnitSkill],
  templateUrl: './unit-sidenav-display.html',
  styleUrl: './unit-sidenav-display.scss',
})
export class UnitSidenavDisplay {
  unit = input.required<IUnit>();

  public isPinned = signal<boolean>(false);
  public isUnitInfoExpanded = signal<boolean>(false);
  public isStatsInfoExpanded = signal<boolean>(false);
  public isInventoryExpanded = signal<boolean>(true);
  public isSkillsInfoExpanded = signal<boolean>(true);

  constructor(public teamDataService: TeamDataService, public eventService: MapEventService) {
    this.teamDataService = inject(TeamDataService);
    this.eventService = inject(MapEventService);

    //Subscribe to external events
    this.eventService.pinUnit
      .subscribe((unitName) => this.syncPinnedStatus());
    this.eventService.unpinUnit
      .subscribe((unitName) => this.syncPinnedStatus());
  }

  ngOnInit() {
    this.syncPinnedStatus();
  }

  ngOnChanges() {
    //Every time unit() changes, reset defaults
    this.syncPinnedStatus();

    this.isUnitInfoExpanded.set(false);
    this.isStatsInfoExpanded.set(false);
    this.isInventoryExpanded.set(true);
    this.isSkillsInfoExpanded.set(true);
  }

  public syncPinnedStatus() {
    this.isPinned.set(this.eventService.getPinnedStateForUnit(this.unit().name));
  }

  public toggleUnitPinnedStatus() { 
    this.eventService.toggleUnitPinnedState(this.unit().name); 
  }

  public toggleUnitInfoExpansion() { 
    this.isUnitInfoExpanded.set(!this.isUnitInfoExpanded()); 
  }

  public toggleStatExpansion() { 
    this.isStatsInfoExpanded.set(!this.isStatsInfoExpanded());
  }

  public toggleInventoryExpansion() { 
    this.isInventoryExpanded.set(!this.isInventoryExpanded());
  }

  public toggleSkillsExpansion() { 
    this.isSkillsInfoExpanded.set(!this.isSkillsInfoExpanded());
  }
  

  public sortModifiedUnitStat() : number {
    //Don't actually want a real sort here, so just return 0 for all items.
    return 0;
  }

  public getInventoryLabel() : string {
    return this.teamDataService.getInterfaceLabels()?.inventory ?? "";
  }

  public getInventorySubsectionLabel(index: number) : string {
    return this.teamDataService.getInterfaceLabels()?.inventorySubsections[index] ?? "";
  }

  public getSkillsLabel() : string {
    return this.teamDataService.getInterfaceLabels()?.skills ?? "";
  }

  public getSkillSubsectionLabel(index: number) : string {
    return this.teamDataService.getInterfaceLabels()?.skillSubsections[index] ?? "";
  }

  public getUnitAffiliation() : IAffiliation | undefined {
    return this.teamDataService.getAffiliationByName(this.unit().affiliation);
  }

  public shouldFlipUnitSprite() : boolean {
    let aff = this.getUnitAffiliation();
    return aff?.flipUnitSprites ?? false;
  }

  public getUnitClass(name: string) : IClass | undefined {
    return this.teamDataService.getClassByName(name);
  }
}
