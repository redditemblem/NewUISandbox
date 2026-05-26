import { Component, inject, input } from '@angular/core';
import { Unit } from '../../../interfaces/unit/unit';
import { MatIconButton } from '@angular/material/button';
import { TeamDataService } from '../../../services/team-data-service';

@Component({
  selector: 'unit-sidenav-display',
  imports: [ MatIconButton ],
  templateUrl: './unit-sidenav-display.html',
  styleUrl: './unit-sidenav-display.scss',
})
export class UnitSidenavDisplay {
  unit = input.required<Unit>();

  constructor(public teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
  }
}
