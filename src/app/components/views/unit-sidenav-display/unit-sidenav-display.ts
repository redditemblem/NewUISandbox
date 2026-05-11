import { Component, input } from '@angular/core';
import { Unit } from '../../../interfaces/unit/unit';

@Component({
  selector: 'unit-sidenav-display',
  imports: [],
  templateUrl: './unit-sidenav-display.html',
  styleUrl: './unit-sidenav-display.scss',
})
export class UnitSidenavDisplay {
  unit = input.required<Unit>();
}
