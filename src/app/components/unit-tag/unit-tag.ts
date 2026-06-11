import { Component, inject, input } from '@angular/core';
import { TeamDataService } from '../../services/team-data-service';
import { Tag } from '../../interfaces/system/tag';

@Component({
  selector: 'unit-tag',
  imports: [],
  templateUrl: './unit-tag.html',
  styles: `
    div.tagContainer {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      column-gap: 4px;
      padding: 4px 16px 4px 16px;
      border-radius: 0px 8px 0px 8px;
      background: var(--mat-sys-primary-container);

      img {
        max-height: 12px;
        max-width: 12px;
        object-fit: scale-down;
      }

      p {
        margin: 0px;
        max-width: 125px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-wrap: nowrap;
      }
    }
  `
})
export class UnitTag {
  tag = input.required<string>();
  systemData : Tag | undefined;

  constructor(public teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
  }

  ngOnChanges() {
    this.systemData = this.teamDataService.getTagByName(this.tag());
  }
}
