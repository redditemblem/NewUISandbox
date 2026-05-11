import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { TeamDataService } from '../../../services/team-data-service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Unit } from '../../../interfaces/unit/unit';
import { UnitSidenavDisplay } from "../unit-sidenav-display/unit-sidenav-display";

@Component({
  selector: 'map-units-sidenav',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule, UnitSidenavDisplay],
  templateUrl: './map-units-sidenav.html',
  styleUrl: './map-units-sidenav.scss',
})
export class MapUnitsSidenav {
  @ViewChild('unitAutocompleteInput') unitAutocompleteInput!: ElementRef<HTMLInputElement>;
  
  selectedUnit = new FormControl<null | Unit>(null);
  filteredUnits: Unit[];

  constructor(public dataService: TeamDataService) {
    this.dataService = inject(TeamDataService);
    this.filteredUnits = [];
  }

  filterUnits() : void {
    const filterValue = this.unitAutocompleteInput.nativeElement.value.toLowerCase();
    this.filteredUnits = this.dataService.getUnitsList()
      .filter(unit => 
        unit.name.toLowerCase().includes(filterValue) || unit.normalizedName.toLowerCase().includes(filterValue)
      )
      .sort((a, b) => this._sortUnits(a, b));
  }

  //Sort units by name
  private _sortUnits(unitA: Unit, unitB: Unit) {
      return unitA.name.toLowerCase().localeCompare(unitB.name.toLowerCase());
  }

  formatAutocompleteDisplayValue(unit: Unit): string {
    return unit && unit.name ? unit.name : '';
  }
}
