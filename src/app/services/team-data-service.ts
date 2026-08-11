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
import { IEmblem } from '../data/interfaces/system/emblem';
import { IEngageAttack } from '../data/interfaces/system/engage-attack';
import { IEngravingLookupService } from './interfaces/engraving-lookup-service';
import { ICurrencyConstantsLookupService } from './interfaces/currency-constants-lookup-service';
import { ISkillLookupService } from './interfaces/skill-lookup-service';
import { IBattleStyle } from '../data/interfaces/system/battle-style';

@Injectable({
  providedIn: 'root',
})
export class TeamDataService implements ICurrencyConstantsLookupService, IEngravingLookupService, ISkillLookupService {

  private readonly apiUrl = 'https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/';

  private loading = signal<boolean>(true);
  public readonly isLoading = this.loading.asReadonly();

  private error = signal<string>("");
  public readonly errorMessage = this.error.asReadonly();

  private map = signal<IMapData>({});
  public readonly mapData = this.map.asReadonly();

  constructor(private http: HttpClient) {
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
  
  public getWorksheetID() : string | undefined { return this.mapData().workbookID; }
  public isConvoyConfigured() : boolean { return this.mapData().showConvoyLink ?? false; }
  public isShopConfigured() : boolean { return this.mapData().showShopLink ?? false; }
  public getChapterPostUrl() : string | undefined { return this.mapData().map?.chapterPostURL; }

  public getUnitsList() : IUnit[] {
    return this.mapData().units ?? [];
  }

  public getInterfaceLabels() : IInterfaceLabels | undefined {
	return this.mapData().system?.interfaceLabels;
  }

  public getMapConstants() : IMapConstants | undefined {
	return this.mapData().map?.constants;
  }

  public getCurrencyConstants() : ICurrencyConstants | undefined {
	return this.mapData().system?.constants.currency;
  }

  public getAffiliationByName(name: string) : IAffiliation | undefined {
	const dict = this.mapData().system?.affiliations;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  public getBattleStyleByName(name: string) : IBattleStyle | undefined {
	const dict = this.mapData().system?.battleStyles;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  public getClassByName(name: string) : IClass | undefined {
	const dict = this.mapData().system?.classes;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  public getEmblemByName(name: string) : IEmblem | undefined { 
	const dict = this.mapData().system?.emblems;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  public getEngageAttackByName(name: string) : IEngageAttack | undefined {
	const dict = this.mapData().system?.engageAttacks;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  public getEngravingByName(name: string) : IEngraving | undefined { 
	const dict = this.mapData().system?.engravings;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  public getItemByName(name: string) : IItem | undefined {
	const dict = this.mapData().system?.items;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  public getSkillByName(name: string) : ISkill | undefined {
	const dict = this.mapData().system?.skills;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  public getStatusConditionByName(name: string) : IStatusCondition | undefined {
	const dict = this.mapData().system?.statusConditions;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  public getTagByName(name: string) : ITag | undefined {
	const dict = this.mapData().system?.tags;
	if(!dict || !name) return undefined;
	else return dict[name];
  }

  public getUnitByName(name: string) : IUnit | undefined {
	let array = this.mapData().units ?? [];
	return array.find(unit => unit.name == name);
  }
}