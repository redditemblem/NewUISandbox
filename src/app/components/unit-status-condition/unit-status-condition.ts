import { Component, inject, input, OnChanges, signal } from '@angular/core';
import { TeamDataService } from '../../services/team-data-service';
import { IStatusCondition } from '../../data/interfaces/system/status-condition';
import { IUnitStatus } from '../../data/interfaces/unit/unit-status';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'unit-status-condition',
  imports: [KeyValuePipe],
  templateUrl: './unit-status-condition.html',
  styleUrl: './unit-status-condition.scss',
})
export class UnitStatusCondition implements OnChanges {
  public status = input.required<IUnitStatus>();
  
  protected systemData = signal<IStatusCondition | undefined>(undefined);

  constructor(private teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
  }

  ngOnChanges() {
    this.systemData.set(this.teamDataService.getStatusConditionByName(this.status().name));
  }
}
