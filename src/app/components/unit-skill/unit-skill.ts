import { Component, inject, input } from '@angular/core';
import { UnitSkill as IUnitSkill } from '../../interfaces/unit/unit-skill';
import { Skill } from '../../interfaces/system/skill';
import { TeamDataService } from '../../services/team-data-service';
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'unit-skill',
  imports: [MatDivider],
  templateUrl: './unit-skill.html',
  styleUrl: './unit-skill.scss',
})
export class UnitSkill {
  skill = input.required<IUnitSkill>();
  expanded = input<boolean>(true);
  systemData : Skill | undefined;

  constructor(public teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
  }
  
  ngOnChanges() {
    this.systemData = this.teamDataService.getSkillByName(this.skill().name);
  }

  getAdditionalStatsText() : string {
    let stats = this.skill().additionalStats;
    return Object.entries(stats).map(s => `${s[1]} ${s[0]}`).join(", ");
  }
}
