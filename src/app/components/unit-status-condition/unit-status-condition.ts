import { Component, inject, input } from '@angular/core';
import { TeamDataService } from '../../services/team-data-service';
import { StatusCondition } from '../../interfaces/system/status-condition';
import { UnitStatus } from '../../interfaces/unit/unit-status';

@Component({
  selector: 'unit-status-condition',
  imports: [],
  templateUrl: './unit-status-condition.html',
  styleUrl: './unit-status-condition.scss',
})
export class UnitStatusCondition {
  status = input.required<UnitStatus>();
  systemData : StatusCondition | undefined;

  constructor(public teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
  }

  ngOnInit() {
    this.systemData = this.teamDataService.getStatusConditionByName(this.status().name);
  }
}
