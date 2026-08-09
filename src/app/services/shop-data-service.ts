import { inject, Injectable, signal } from '@angular/core';
import { ITag } from '../data/interfaces/system/tag';
import { ISkill } from '../data/interfaces/system/skill';
import { IItem } from '../data/interfaces/system/item';
import { IEngraving } from '../data/interfaces/system/engraving';
import { IShopItem } from '../data/interfaces/storage/shop/shop-item';
import { IItemSort } from '../data/interfaces/storage/item-sort';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IShopData } from '../data/interfaces/storage/shop/shop-data';

@Injectable({
  providedIn: 'root',
})
export class ShopDataService {

  private readonly apiUrl = 'https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/shop/';

  private loading = signal<boolean>(true);
  public readonly isLoading = this.loading.asReadonly();

  private error = signal<string>("");
  public readonly errorMessage = this.error.asReadonly();

  private shop = signal<IShopData | undefined>(undefined);
  public readonly shopData = this.shop.asReadonly();

  constructor(private http: HttpClient) {
	  this.http = inject(HttpClient);
  }

  public async loadDataForTeam(teamName: string) {
	  this.loading.set(true);
	  this.shop.set(undefined);

    this.http.get<IShopData>(`${this.apiUrl}${teamName}`, {responseType: 'json'})
		.subscribe({
			next: (response) => {
				this.shop.set(response);
				this.loading.set(false);
			},
			error: (response: HttpErrorResponse) => {
				this.error.set("An API error occurred.\nFailed to load the list of teams.");
				this.loading.set(false);
			}
		});
  }

  public getWorksheetID() : string | undefined { return this.shopData()?.workbookID ?? ''; }
  public isConvoyConfigured() : boolean { return this.shopData()?.showConvoyLink ?? false; }

  public getShopItemsList() : IShopItem[] {
    return this.shopData()?.shopItems ?? [];
  }

  public getShopItemSorts() : IItemSort[] {
    return this.shopData()?.parameters?.sorts ?? [];
  }

  public getShopItemCategories(): string[] { 
  return this.shopData()?.parameters.itemCategories ?? [];
  }

  public getShopItemUtilizedStats() : string[] {
  return this.shopData()?.parameters.utilizedStats ?? [];
  }

  public getShopItemTargetedStats() : string[] {
  return this.shopData()?.parameters.targetedStats ?? [];
  }

  public getEngravingByName(name: string) : IEngraving | undefined {
    const dict = this.shopData()?.engravings;
    if(!dict || !name) return undefined;
    else return dict[name];
  }

  public getItemByName(name: string) : IItem | undefined {
    const dict = this.shopData()?.items;
    if(!dict || !name) return undefined;
    else return dict[name];
  }

  public getSkillByName(name: string) : ISkill | undefined {
    const dict = this.shopData()?.skills;
    if(!dict || !name) return undefined;
    else return dict[name];
  }

  public getTagByName(name: string) : ITag | undefined {
    const dict = this.shopData()?.tags;
    if(!dict || !name) return undefined;
    else return dict[name];
  }

}
