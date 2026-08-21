import { Injectable, signal } from '@angular/core';

import { ITeamData } from '../data/interfaces/team-data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TeamListService {
  private readonly apiUrl = 'https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList';

  private loading = signal<boolean>(true);
  public readonly isLoading = this.loading.asReadonly();

  private error = signal<string>("");
  public readonly errorMessage = this.error.asReadonly();

  private teams = signal<ITeamData[]>([]);
  public readonly teamsList = this.teams.asReadonly();

  constructor(private http: HttpClient)  {
    this.loading.set(true);
    this.teams.set([]);
    
    http.get<ITeamData[]>(this.apiUrl, {responseType: 'json'})
      .subscribe({
        next: (response) => {
          this.teams.set(response);
          this.loading.set(false);
        },
        error: (response: HttpErrorResponse) => {
          console.error(response);
          this.error.set("An API error occurred.\nFailed to load the list of teams.");
          this.loading.set(false);
        }
      });
  }
}
