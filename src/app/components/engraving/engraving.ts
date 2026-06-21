import { Component, inject, input } from '@angular/core';
import { TeamDataService } from '../../services/team-data-service';
import { Engraving as IEngraving } from '../../interfaces/system/engraving';

@Component({
  selector: 'engraving',
  imports: [],
  templateUrl: './engraving.html',
  styleUrl: './engraving.scss',
})
export class Engraving {
  name = input.required<string>();
  systemData : IEngraving | undefined;

  constructor(public teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
  }
  
  ngOnChanges() {
    this.systemData = this.teamDataService.getEngravingByName(this.name());
  }
}
