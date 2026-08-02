import { inject, Injectable, signal } from '@angular/core';
import { IConvoyData } from '../data/interfaces/storage/convoy/convoy-data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConvoyDataService {

  private readonly apiUrl = 'http://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/convoy/';

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
}
