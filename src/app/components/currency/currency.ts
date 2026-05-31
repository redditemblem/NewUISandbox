import { Component, inject, input } from '@angular/core';
import { TeamDataService } from '../../services/team-data-service';
import { CurrencyConstants } from '../../interfaces/system/currency-constants';

@Component({
  selector: 'currency',
  imports: [],
  templateUrl: './currency.html',
  styles: ''
})
export class Currency {
  amount = input.required<number | undefined>();
  constants : CurrencyConstants | undefined;

  constructor(public teamDataService : TeamDataService) {
    this.teamDataService = inject(TeamDataService);
    this.constants = this.teamDataService.getCurrencyConstants();
  }
}
