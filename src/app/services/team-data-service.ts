import { inject, Injectable, signal } from '@angular/core';
import { MapData } from '../interfaces/map/map-data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Unit } from '../interfaces/unit/unit';
import { Affiliation } from '../interfaces/system/affiliation';
import { Class } from '../interfaces/system/class';
import { InterfaceLabels } from '../interfaces/system/interface-labels';
import { CurrencyConstants } from '../interfaces/system/currency-constants';
import { Tag } from '../interfaces/system/tag';
import { StatusCondition } from '../interfaces/system/status-condition';

@Injectable({
  providedIn: 'root',
})
export class TeamDataService {

  private readonly apiUrl = 'https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/';

  private loading = signal<boolean>(true);
  readonly isLoading = this.loading.asReadonly();

  private error = signal<string>("");
  readonly errorMessage = this.error.asReadonly();

  private map = signal<MapData>({});
  readonly mapData = this.map.asReadonly();

  constructor(public http: HttpClient) {
	  this.http = inject(HttpClient);
  }

  loadDataForTeam(teamName: string) {
    this.http.get<MapData>(this.apiUrl + teamName, {responseType: 'json'}).subscribe({
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

  getUnitsList() : Unit[] {
    return this.mapData().units ?? [];
  }

  getInterfaceLabels() : InterfaceLabels | undefined {
	return this.mapData().system?.interfaceLabels;
  }

  getCurrencyConstants() : CurrencyConstants | undefined {
	return this.mapData().system?.constants.currency;
  }

  getAffiliationByName(name: string) : Affiliation | undefined {
	let dict = this.mapData().system?.affiliations;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  getClassByName(name: string) : Class | undefined {
	let dict = this.mapData().system?.classes;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  getStatusConditionByName(name: string) : StatusCondition | undefined {
	let dict = this.mapData().system?.statusConditions;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  getTagByName(name: string) : Tag | undefined {
	let dict = this.mapData().system?.tags;
	if(!dict || !name) return undefined;
	else return dict[name];
  }
}