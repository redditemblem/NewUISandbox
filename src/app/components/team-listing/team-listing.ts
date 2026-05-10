import { Component, input } from '@angular/core';
import { TeamData } from '../../interfaces/team-data';
import { MatCard, MatCardActions, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'team-listing',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardActions, MatButton, RouterLink],
  templateUrl: './team-listing.html',
  styleUrl: './team-listing.scss',
})
export class TeamListing {
  team = input.required<TeamData>();

  GetTeamNameWithoutSpaces(): string{
    return this.team().teamName.replace(' ', '');
  }
}
