import { Component, inject, input } from '@angular/core';
import { TeamDataService } from '../../services/team-data-service';
import { ICurrencyConstants } from '../../data/interfaces/system/currency-constants';

@Component({
  selector: 'currency',
  imports: [],
  templateUrl: './currency.html',
  styles: ''
})
export class Currency {
  amount = input.required<number | undefined>();
  constants : ICurrencyConstants | undefined;

  constructor(public teamDataService : TeamDataService) {
    this.teamDataService = inject(TeamDataService);
    this.constants = this.teamDataService.getCurrencyConstants();
  }
}
