import { Component, inject, input, OnChanges, signal } from '@angular/core';
import { TeamDataService } from '../../services/team-data-service';
import { IStatusCondition } from '../../data/interfaces/system/status-condition';
import { IUnitStatus } from '../../data/interfaces/unit/unit-status';
import { KeyValuePipe } from '@angular/common';
import { MatDivider } from "@angular/material/divider";
import { MatTooltip } from "@angular/material/tooltip";

@Component({
  selector: 'unit-status-condition',
  imports: [KeyValuePipe, MatDivider, MatTooltip],
  templateUrl: './unit-status-condition.html',
  styleUrl: './unit-status-condition.scss',
})
export class UnitStatusCondition implements OnChanges {
  //External inputs
  public status = input.required<IUnitStatus>();
  
  //Internal attributes
  protected systemData = signal<IStatusCondition | undefined>(undefined);

  constructor(private readonly teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
  }

  ngOnChanges() {
    this.systemData.set(this.teamDataService.getStatusConditionByName(this.status().name));
  }
}
