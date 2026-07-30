import { Component, inject, input, OnChanges, signal } from '@angular/core';
import { TeamDataService } from '../../services/team-data-service';
import { IEngraving } from '../../data/interfaces/system/engraving';

@Component({
  selector: 'engraving',
  imports: [],
  templateUrl: './engraving.html',
  styleUrl: './engraving.scss',
})
export class Engraving implements OnChanges {
  public name = input.required<string>();

  protected systemData = signal<IEngraving | undefined>(undefined);

  constructor(private teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
  }
  
  ngOnChanges() {
    this.systemData.set(this.teamDataService.getEngravingByName(this.name()));
  }
}
