import { Component, inject, input } from '@angular/core';
import { TeamDataService } from '../../services/team-data-service';
import { ICurrencyConstants } from '../../data/interfaces/system/currency-constants';

@Component({
  selector: 'currency',
  imports: [],
  template: `<p>{{formatCurrentString()}}</p>`,
  styles: `p { margin: 0px; }`
})
export class Currency {
  public amount = input.required<number | undefined>();

  private readonly constants : ICurrencyConstants | undefined;

  constructor(private teamDataService : TeamDataService) {
    this.teamDataService = inject(TeamDataService);
    this.constants = this.teamDataService.getCurrencyConstants();
  }

  /** Formats the `amount()` into a display string. */
  protected formatCurrentString() : string {
    const value: number = this.amount() ?? 0;
    if(this.constants === undefined)
      return `${value}`;
    
    if(this.constants.isSymbolLeftAligned) {
      if(this.constants.includeSpace) {
        return `${this.constants.currencySymbol} ${value}`;
      }
      else {
        return `${this.constants.currencySymbol}${value}`;
      }
    }
    else {
      if(this.constants.includeSpace) {
        return `${value} ${this.constants.currencySymbol}`;
      }
      else {
        return `${value}${this.constants.currencySymbol}`;
      }
    }
  }
}
