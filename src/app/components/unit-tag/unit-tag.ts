import { Component, inject, input } from '@angular/core';
import { TeamDataService } from '../../services/team-data-service';
import { ITag } from '../../data/interfaces/system/tag';

@Component({
  selector: 'unit-tag',
  imports: [],
  templateUrl: './unit-tag.html',
  styles: `
    #container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      column-gap: 4px;
      padding: 4px 8px 4px 8px;
      border-radius: 0px 8px 0px 8px;
      background: var(--tertiary-theme-color);

      img {
        max-height: 16px;
        max-width: 16px;
        object-fit: scale-down;
      }

      p {
        margin: 0px;
        max-width: 125px;
        overflow: hidden;
        font-size: 0.8rem;
        text-overflow: ellipsis;
        text-wrap: nowrap;
      }
    }
  `
})
export class UnitTag {
  tag = input.required<string>();
  systemData : ITag | undefined;

  constructor(public teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
  }

  ngOnChanges() {
    this.systemData = this.teamDataService.getTagByName(this.tag());
  }
}
