import { Component, inject, input } from '@angular/core';
import { Unit } from '../../../interfaces/unit/unit';
import { MatIconButton } from '@angular/material/button';
import { TeamDataService } from '../../../services/team-data-service';
import { TextFieldsWithLabeledHeader } from "../../text-fields-with-labeled-header/text-fields-with-labeled-header";
import { Affiliation } from '../../../interfaces/system/affiliation';
import { Class } from '../../../interfaces/system/class';
import { Currency } from '../../currency/currency';

@Component({
  selector: 'unit-sidenav-display',
  imports: [MatIconButton, TextFieldsWithLabeledHeader, Currency],
  templateUrl: './unit-sidenav-display.html',
  styleUrl: './unit-sidenav-display.scss',
})
export class UnitSidenavDisplay {
  unit = input.required<Unit>();

  isUnitInfoExpanded = false;

  constructor(public teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
  }

  getUnitAffiliation() : Affiliation | undefined {
    return this.teamDataService.getAffiliationByName(this.unit().affiliation);
  }

  getUnitClass(name: string) : Class | undefined {
    return this.teamDataService.getClassByName(name);
  }

  toggleUnitInfoExpansion() : void {
    this.isUnitInfoExpanded = !this.isUnitInfoExpanded;
  }
}
