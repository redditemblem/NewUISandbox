import { Component, inject, input, OnChanges, signal } from '@angular/core';
import { TeamDataService } from '../../services/team-data-service';
import { ITerrainType } from '../../data/interfaces/system/terrain-type';
import { TextFieldsWithLabeledHeader } from "../text-fields-with-labeled-header/text-fields-with-labeled-header";
import { ITerrainTypeStats } from '../../data/interfaces/system/terrain-type-stats';
import { KeyValuePipe } from '@angular/common';
import { StringDictionary } from '../../data/interfaces/common/dictionaries';

@Component({
  selector: 'tile-terrain-type',
  imports: [TextFieldsWithLabeledHeader, KeyValuePipe ],
  templateUrl: './tile-terrain-type.html',
  styleUrl: './tile-terrain-type.scss',
})
export class TileTerrainType implements OnChanges {

  //External inputs
  public name = input.required<string>();
  public isWarp = input.required<boolean>();

  //Internal attributes
  protected systemData = signal<ITerrainType | undefined>(undefined);

  constructor(private readonly teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
  }

  ngOnChanges() {
    this.systemData.set(this.teamDataService.getTerrainTypeByName(this.name()));
  }

  protected buildStatGroupTitle(statGroup: ITerrainTypeStats) : string {
    const affiliations: string[] = statGroup.affiliationNames ?? [];
    if (affiliations.length < 1)
      return "";

    return `For ${affiliations.join(", ")}`;
  }

  protected dictHasKeys(dict: StringDictionary<any>) : boolean {
    return Object.keys(dict).length > 0;
  }

  protected doNotSortByKey() : number { return 0; }
}
