import { Component, input, OnChanges, signal } from '@angular/core';

export interface IHpBarColorSet {
  "primary": string,
  "secondary": string,
  "border": string
}

@Component({
  selector: 'unit-hp-bar',
  imports: [],
  templateUrl: './unit-hp-bar.html',
  styles: `
    div.hpBar {
      width: 100%;
      height: 6px;
    }
  `
})
export class UnitHpBar implements OnChanges {
  //External inputs
  public percentage = input.required<number>();

  //Constants
  private readonly overfilled: IHpBarColorSet = {
    "primary": "#992DE4",
    "secondary": "#d9cce3",
    "border": "#360b55"
  };

  private readonly above50: IHpBarColorSet = {
    "primary": "#3CD66F",
    "secondary": "#d3efdd",
    "border": "#114923"
  };

  private readonly above25: IHpBarColorSet = {
    "primary": "#FFC107",
    "secondary": "#fff4d4",
    "border": "#9d6b00"
  };

  private readonly below25: IHpBarColorSet = {
    "primary": "#F13535",
    "secondary": "#efd1d1",
    "border": "#640707"
  };

  //Internal attributes
  protected colorSet = signal<IHpBarColorSet>(this.above50);

  ngOnChanges() {
    if(this.percentage() > 100){
      this.colorSet.set(this.overfilled);
    } 
    else if(this.percentage() <= 100 && this.percentage() > 50)
    {
      this.colorSet.set(this.above50);
    } 
    else if(this.percentage() <= 50 && this.percentage() > 25)
    {
      this.colorSet.set(this.above25);
    }
    else
    {
      this.colorSet.set(this.below25);
    }
  }
}