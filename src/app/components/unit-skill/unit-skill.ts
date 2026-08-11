import { Component, inject, input, OnChanges, signal } from '@angular/core';
import { IUnitSkill } from '../../data/interfaces/unit/unit-skill';
import { ISkill } from '../../data/interfaces/system/skill';
import { TeamDataService } from '../../services/team-data-service';
import { MatDivider } from "@angular/material/divider";
import { ISkillLookupService } from '../../services/interfaces/skill-lookup-service';

@Component({
  selector: 'unit-skill',
  imports: [MatDivider],
  templateUrl: './unit-skill.html',
  styleUrl: './unit-skill.scss',
})
export class UnitSkill implements OnChanges {
  
  public skill = input.required<IUnitSkill>();
  public dataService = input.required<ISkillLookupService>();

  public expanded = input<boolean>(true);
  public disabled = input<boolean>(false);

  protected systemData = signal<ISkill | undefined>(undefined);

  ngOnChanges() {
    this.systemData.set(this.dataService().getSkillByName(this.skill().name));
  }

  protected getAdditionalStatsText() : string {
    const stats = this.skill().additionalStats;
    return Object.entries(stats).map(s => `${s[1]} ${s[0]}`).join(", ");
  }
}
