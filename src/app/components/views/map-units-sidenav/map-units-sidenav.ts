import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { TeamDataService } from '../../../services/team-data-service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { IUnit } from '../../../data/interfaces/unit/unit';
import { UnitSidenavDisplay } from "../unit-sidenav-display/unit-sidenav-display";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MapEventService } from '../../../services/map-event-service';

@Component({
  selector: 'map-units-sidenav',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule, UnitSidenavDisplay, MatButtonModule, MatIconModule],
  templateUrl: './map-units-sidenav.html',
  styleUrl: './map-units-sidenav.scss',
})
export class MapUnitsSidenav {
  @ViewChild('unitAutocompleteInput') unitAutocompleteInput!: ElementRef<HTMLInputElement>;
  
  public selectedUnit = new FormControl<null | IUnit>(null);
  public filteredUnits: IUnit[];

  constructor(public teamDataService: TeamDataService, public eventService: MapEventService) {
    this.teamDataService = inject(TeamDataService);
    this.filteredUnits = [];

    //Subscribe to external events
    this.eventService.pinUnit
      .subscribe((unitName) => this.setPinnedUnit(unitName));
  }

  private setPinnedUnit(unitName: string) {
    const unit = this.teamDataService.getUnitByName(unitName);
    if(unit === undefined)
      return;

    this.selectedUnit.setValue(unit);
  }

  public filterUnits() {
    const filterValue = this.unitAutocompleteInput.nativeElement.value.toLowerCase();
    this.filteredUnits = this.teamDataService.getUnitsList()
      .filter(unit => 
        unit.name.toLowerCase().includes(filterValue) || unit.normalizedName.toLowerCase().includes(filterValue)
      )
      .sort((a, b) => this.sortUnits(a, b));
  }

  //Sort units by name
  private sortUnits(unitA: IUnit, unitB: IUnit) {
    return unitA.name.toLowerCase().localeCompare(unitB.name.toLowerCase());
  }

  public formatAutocompleteDisplayValue(unit: IUnit): string {
    return unit && unit.name ? unit.name : '';
  }

  public shouldFlipUnitSprite(unit: IUnit) : boolean {
    const aff = this.teamDataService.getAffiliationByName(unit.affiliation);
    return aff?.flipUnitSprites ?? false;
  }
}
