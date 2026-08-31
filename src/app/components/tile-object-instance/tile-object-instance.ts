import { Component, inject, input, OnChanges, signal } from '@angular/core';
import { TeamDataService } from '../../services/team-data-service';
import { ICoordinate } from '../../data/interfaces/map/coordinate';
import { ITileObject } from '../../data/interfaces/system/tile-object';
import { ITileObjectInstance } from '../../data/interfaces/map/tile-object-instance';
import { IMapSegment } from '../../data/interfaces/map/map-segment';
import { TextFieldsWithLabeledHeader } from "../text-fields-with-labeled-header/text-fields-with-labeled-header";

@Component({
  selector: 'tile-object-instance',
  imports: [TextFieldsWithLabeledHeader],
  templateUrl: './tile-object-instance.html',
  styleUrl: './tile-object-instance.scss',
})
export class TileObjectInstance implements OnChanges {

  //External inputs
  public id = input.required<number>();
  public coordinate = input.required<ICoordinate>();

  //Internal attributes
  protected instanceData = signal<ITileObjectInstance | undefined>(undefined);
  protected systemData = signal<ITileObject | undefined>(undefined);

  constructor(private readonly teamDataService: TeamDataService) {
    this.teamDataService = inject(TeamDataService);
  }

  ngOnChanges() {
    this.instanceData.set(this.teamDataService.getTileObjectInstanceByID(this.id(), this.coordinate()));
    if (this.instanceData() === undefined)
      return;

    this.systemData.set(this.teamDataService.getTileObjectByName(this.instanceData()!.name));
  }
}
