import { Component, inject, input, OnChanges, OnInit, signal } from '@angular/core';
import { TeamDataService } from '../../services/team-data-service';
import { IEngraving } from '../../data/interfaces/system/engraving';
import { IEngravingLookupService } from '../../services/interfaces/engraving-lookup-service';
import { ConvoyDataService } from '../../services/convoy-data-service';
import { ShopDataService } from '../../services/shop-data-service';

@Component({
  selector: 'engraving',
  imports: [],
  templateUrl: './engraving.html',
  styleUrl: './engraving.scss',
})
export class Engraving implements OnChanges {
  public name = input.required<string>();
  public dataService = input.required<IEngravingLookupService>();

  protected systemData = signal<IEngraving | undefined>(undefined);
  
  ngOnChanges() {
    this.systemData.set(this.dataService().getEngravingByName(this.name()));
  }
}
