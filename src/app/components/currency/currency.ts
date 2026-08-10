import { Component, inject, input, OnInit } from '@angular/core';
import { TeamDataService } from '../../services/team-data-service';
import { ICurrencyConstants } from '../../data/interfaces/system/currency-constants';
import { ICurrencyConstantsLookupService } from '../../services/interfaces/currency-constants-lookup-service';

@Component({
  selector: 'currency',
  imports: [],
  template: `<p>{{formatCurrentString()}}</p>`,
  styles: `p { margin: 0px; }`
})
export class Currency implements OnInit{
  public amount = input.required<number | undefined>();
  public dataService = input.required<ICurrencyConstantsLookupService>();

  private constants : ICurrencyConstants | undefined;

  ngOnInit() {
    this.constants = this.dataService()?.getCurrencyConstants();
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
