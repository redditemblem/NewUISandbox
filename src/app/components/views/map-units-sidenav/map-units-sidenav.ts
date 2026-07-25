import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { TeamDataService } from '../../../services/team-data-service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
  
  protected selectedUnit = new FormControl<null | IUnit>(null);
  protected selectedUnitIsPinned = signal<boolean>(false);
  protected filteredUnits: IUnit[];

  constructor(protected teamDataService: TeamDataService, protected eventService: MapEventService) {
    this.teamDataService = inject(TeamDataService);
    this.filteredUnits = [];

    //Subscribe to external events
    this.eventService.pinUnit
      .subscribe((unitName) => this.pinUnit(unitName));
    this.eventService.unpinUnit
      .subscribe((unitName) => this.unpinUnit(unitName));
  }

  /** Pulls the full units list and filters it to units with names that contain the search value. */
  protected filterUnits() {
    const filterValue = this.unitAutocompleteInput.nativeElement.value.toLowerCase();
    this.filteredUnits = this.teamDataService.getUnitsList()
      .filter(unit => 
        unit.name.toLowerCase().includes(filterValue) || unit.normalizedName.toLowerCase().includes(filterValue)
      )
      .sort((a, b) => this.sortUnits(a, b));
  }

  /** Sorts `unitA` and `unitB` alphabetically by name, case insensitive. */
  private sortUnits(unitA: IUnit, unitB: IUnit) {
    return unitA.name.toLowerCase().localeCompare(unitB.name.toLowerCase());
  }

  /** If the `unit` exists, returns the unit's name. Otherwise, returns an empty string. */
  protected formatAutocompleteDisplayValue(unit: IUnit): string {
    return (unit && unit.name) ? unit.name : '';
  }

  /** Returns true if `unit`'s affiliation is configured to horizontally flip sprites. */
  protected shouldFlipUnitSprite(unit: IUnit) : boolean {
    const aff = this.teamDataService.getAffiliationByName(unit.affiliation);
    return aff?.flipUnitSprites ?? false;
  }

  /** Gets the unit with a name matching `unitName` and sets it as the currently selected unit. */
  private pinUnit(unitName: string) {
    const unit = this.teamDataService.getUnitByName(unitName);
    if(unit === undefined) return;

    this.selectedUnit.setValue(unit);
    this.selectedUnitIsPinned.set(true);
  }

  /** If the current selected unit has `unitName`, updates the pinned signal. */
  private unpinUnit(unitName: string) {
    if(this.selectedUnit.value?.name !== unitName) return;
    this.selectedUnitIsPinned.set(false);
  }

  /** If there is a selected unit, toggles its pinned state. */
  protected toggleUnitPinnedStatus() {
    const selectedName: string = this.selectedUnit.value?.name ?? '';
    if(selectedName.length < 1) return;

    this.eventService.toggleUnitPinnedState(selectedName);
  }

  /** Updates the pinned signal for the currently selected unit. */
  protected syncPinnedStatus(event: MatAutocompleteSelectedEvent) {
    const selectedName: string = this.selectedUnit.value?.name ?? '';
    const isPinned = this.eventService.getPinnedStateForUnit(selectedName);

    this.selectedUnitIsPinned.set(isPinned);
  }
}
