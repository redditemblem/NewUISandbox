import { inject, Injectable, signal } from '@angular/core';
import { IConvoyData } from '../data/interfaces/storage/convoy/convoy-data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IConvoyItem } from '../data/interfaces/storage/convoy/convoy-item';
import { IItem } from '../data/interfaces/system/item';
import { IEngraving } from '../data/interfaces/system/engraving';
import { ITag } from '../data/interfaces/system/tag';
import { ISkill } from '../data/interfaces/system/skill';
import { IItemSort } from '../data/interfaces/storage/item-sort';
import { IEngravingLookupService } from './interfaces/engraving-lookup-service';

@Injectable({
  providedIn: 'root',
})
export class ConvoyDataService implements IEngravingLookupService {

  private readonly apiUrl = 'https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/convoy/';

  private loading = signal<boolean>(true);
  public readonly isLoading = this.loading.asReadonly();

  private error = signal<string>("");
  public readonly errorMessage = this.error.asReadonly();

  private convoy = signal<IConvoyData | undefined>(undefined);
  public readonly convoyData = this.convoy.asReadonly();

  constructor(private http: HttpClient) {
	  this.http = inject(HttpClient);
  }

  public async loadDataForTeam(teamName: string) {
	  this.loading.set(true);
	  this.convoy.set(undefined);

    this.http.get<IConvoyData>(`${this.apiUrl}${teamName}`, {responseType: 'json'})
		.subscribe({
			next: (response) => {
				this.convoy.set(response);
				this.loading.set(false);
			},
			error: (response: HttpErrorResponse) => {
				this.error.set("An API error occurred.\nFailed to load the list of teams.");
				this.loading.set(false);
			}
		});
  }

  public getWorksheetID() : string | undefined { return this.convoyData()?.workbookID ?? ''; }
  public isShopConfigured() : boolean { return this.convoyData()?.showShopLink ?? false; }

  public getConvoyItemsList() : IConvoyItem[] {
    return this.convoyData()?.convoyItems ?? [];
  }

  public getConvoyItemSorts() : IItemSort[] {
    return this.convoyData()?.parameters?.sorts ?? [];
  }

  public getConvoyItemCategories(): string[] { 
	return this.convoyData()?.parameters.itemCategories ?? [];
  }

  public getConvoyItemOwners() : string[] {
	return this.convoyData()?.parameters.owners ?? [];
  }

  public getConvoyItemUtilizedStats() : string[] {
	return this.convoyData()?.parameters.utilizedStats ?? [];
  }

  public getConvoyItemTargetedStats() : string[] {
	return this.convoyData()?.parameters.targetedStats ?? [];
  }

  public getEngravingByName(name: string) : IEngraving | undefined {
    const dict = this.convoyData()?.engravings;
    if(!dict || !name) return undefined;
    else return dict[name];
  }

  public getItemByName(name: string) : IItem | undefined {
    const dict = this.convoyData()?.items;
    if(!dict || !name) return undefined;
    else return dict[name];
  }

  public getSkillByName(name: string) : ISkill | undefined {
    const dict = this.convoyData()?.skills;
    if(!dict || !name) return undefined;
    else return dict[name];
  }

  public getTagByName(name: string) : ITag | undefined {
    const dict = this.convoyData()?.tags;
    if(!dict || !name) return undefined;
    else return dict[name];
  }
}
