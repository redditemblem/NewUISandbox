import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShopDataService {

  public getWorksheetID() : string {
    return '';
  }

  public isConvoyConfigured() : boolean {
    return true;
  }
}
