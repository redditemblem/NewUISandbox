import { Component, inject, input } from '@angular/core';
import { Unit } from '../../../interfaces/unit/unit';
import { MatIconButton } from '@angular/material/button';
import { TeamDataService } from '../../../services/team-data-service';
import { TextFieldsWithLabeledHeader } from "../../text-fields-with-labeled-header/text-fields-with-labeled-header";
import { Affiliation } from '../../../interfaces/system/affiliation';
import { Class } from '../../../interfaces/system/class';
import { Currency } from '../../currency/currency';
import { UnitTag } from '../../unit-tag/unit-tag';
import { UnitHpBar } from '../../unit-hp-bar/unit-hp-bar';
import { KeyValuePipe } from '@angular/common';
import { ModifiedUnitStat } from '../../modified-unit-stat/modified-unit-stat';
import { UnitStatusCondition } from '../../unit-status-condition/unit-status-condition';

@Component({
  selector: 'unit-sidenav-display',
  imports: [MatIconButton, TextFieldsWithLabeledHeader, Currency, UnitTag, UnitHpBar, KeyValuePipe, ModifiedUnitStat, UnitStatusCondition],
  templateUrl: './unit-sidenav-display.html',
  styleUrl: './unit-sidenav-display.scss',
})
export class UnitSidenavDisplay {
  unit = input.required<Unit>();

  public isUnitInfoExpanded : boolean = false;
  public isStatsInfoExpanded : boolean = false;

  constructor(public teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
  }

  ngOnChanges() {
    //Every time unit() changes, reset expansion statuses
    this.isUnitInfoExpanded = false;
    this.isStatsInfoExpanded = false;
  }

  toggleUnitInfoExpansion() : void { this.isUnitInfoExpanded = !this.isUnitInfoExpanded; }
  toggleStatExpansion() : void { this.isStatsInfoExpanded = !this.isStatsInfoExpanded; }

  sortModifiedUnitStat() : number {
    //Don't actually want a real sort here, so just return 0 for all items.
    return 0;
  }

  getUnitAffiliation() : Affiliation | undefined {
    return this.teamDataService.getAffiliationByName(this.unit().affiliation);
  }

  getUnitClass(name: string) : Class | undefined {
    return this.teamDataService.getClassByName(name);
  }
}
