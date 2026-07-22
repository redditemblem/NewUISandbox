import { inject, Injectable, signal } from '@angular/core';
import { IMapData } from '../data/interfaces/map/map-data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUnit } from '../data/interfaces/unit/unit';
import { IAffiliation } from '../data/interfaces/system/affiliation';
import { IClass } from '../data/interfaces/system/class';
import { IInterfaceLabels } from '../data/interfaces/system/interface-labels';
import { ICurrencyConstants } from '../data/interfaces/system/currency-constants';
import { ITag } from '../data/interfaces/system/tag';
import { IStatusCondition } from '../data/interfaces/system/status-condition';
import { IItem } from '../data/interfaces/system/item';
import { IEngraving } from '../data/interfaces/system/engraving';
import { ISkill } from '../data/interfaces/system/skill';
import { IMapConstants } from '../data/interfaces/map/map-constants';

@Injectable({
  providedIn: 'root',
})
export class TeamDataService {

  private readonly apiUrl = 'https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/';

  private loading = signal<boolean>(true);
  readonly isLoading = this.loading.asReadonly();

  private error = signal<string>("");
  readonly errorMessage = this.error.asReadonly();

  private map = signal<IMapData>({});
  readonly mapData = this.map.asReadonly();

  constructor(public http: HttpClient) {
	this.http = inject(HttpClient);
  }

  async loadDataForTeam(teamName: string) {
	this.loading.set(true);
	this.map.set({});

    this.http.get<IMapData>(`${this.apiUrl}${teamName}`, {responseType: 'json'})
		.subscribe({
			next: (response) => {
				this.map.set(response);
				this.loading.set(false);
			},
			error: (response: HttpErrorResponse) => {
				this.error.set("An API error occurred.\nFailed to load the list of teams.");
				this.loading.set(false);
			}
		});
  }
  
  getWorksheetID() : string | undefined { return this.mapData().workbookID; }
  isConvoyConfigured() : boolean { return this.mapData().showConvoyLink ?? false; }
  isShopConfigured() : boolean { return this.mapData().showShopLink ?? false; }
  getChapterPostUrl() : string | undefined { return this.mapData().map?.chapterPostURL; }

  getUnitsList() : IUnit[] {
    return this.mapData().units ?? [];
  }

  getInterfaceLabels() : IInterfaceLabels | undefined {
	return this.mapData().system?.interfaceLabels;
  }

  getCurrencyConstants() : ICurrencyConstants | undefined {
	return this.mapData().system?.constants.currency;
  }

  getMapConstants() : IMapConstants | undefined {
	return this.mapData().map?.constants;
  }

  getAffiliationByName(name: string) : IAffiliation | undefined {
	let dict = this.mapData().system?.affiliations;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  getClassByName(name: string) : IClass | undefined {
	let dict = this.mapData().system?.classes;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  getEngravingByName(name: string) : IEngraving | undefined { 
	let dict = this.mapData().system?.engravings;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  getItemByName(name: string) : IItem | undefined {
	let dict = this.mapData().system?.items;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  getSkillByName(name: string) : ISkill | undefined {
	let dict = this.mapData().system?.skills;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  getStatusConditionByName(name: string) : IStatusCondition | undefined {
	let dict = this.mapData().system?.statusConditions;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  getTagByName(name: string) : ITag | undefined {
	let dict = this.mapData().system?.tags;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  getUnitByName(name: string) : IUnit | undefined {
	let array = this.mapData().units ?? [];
	return array.find(unit => unit.name == name);
  }
}