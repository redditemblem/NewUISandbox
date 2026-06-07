import { Component, input } from '@angular/core';
import { ModifiedStatValue } from '../../interfaces/common/modified-stat-value';
import { KeyValuePipe, NgClass } from '@angular/common';

@Component({
  selector: 'modified-unit-stat',
  imports: [KeyValuePipe, NgClass],
  templateUrl: './modified-unit-stat.html',
  styleUrl: './modified-unit-stat.scss',
})
export class ModifiedUnitStat {
  name = input.required<string>();
  values = input.required<ModifiedStatValue>();
  expanded = input.required<boolean>();
}
