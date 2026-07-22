import { Component, input } from '@angular/core';
import { IModifiedStatValue } from '../../data/interfaces/common/modified-stat-value';
import { KeyValuePipe, NgClass } from '@angular/common';
import { StatWithBuffIcon } from "../stat-with-buff-icon/stat-with-buff-icon";

@Component({
  selector: 'modified-unit-stat',
  imports: [KeyValuePipe, NgClass, StatWithBuffIcon],
  templateUrl: './modified-unit-stat.html',
  styleUrl: './modified-unit-stat.scss',
})
export class ModifiedUnitStat {
  name = input.required<string>();
  values = input.required<IModifiedStatValue>();
  expanded = input.required<boolean>();
}
