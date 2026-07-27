import { Component, input } from '@angular/core';

@Component({
  selector: 'unit-weapon-rank',
  imports: [],
  templateUrl: './unit-weapon-rank.html',
  styleUrl: './unit-weapon-rank.scss',
})
export class UnitWeaponRank {
  category = input.required<string>();
  rank = input.required<string>();
}
