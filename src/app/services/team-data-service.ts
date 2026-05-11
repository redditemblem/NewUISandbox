import { inject, Injectable, signal } from '@angular/core';
import { MapData } from '../interfaces/map/map-data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Unit } from '../interfaces/unit/unit';

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
}
