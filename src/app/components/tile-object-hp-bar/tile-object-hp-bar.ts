import { Component, input, OnInit, signal } from '@angular/core';
import { IHpBarColorSet } from '../unit-hp-bar/unit-hp-bar';

@Component({
  selector: 'tile-object-hp-bar',
  imports: [],
  templateUrl: './tile-object-hp-bar.html',
  styles: `
    div.hpBar {
      width: 100%;
      height: 6px;
    }
  `
})
export class TileObjectHpBar implements OnInit {

  //External inputs
  public percentage = input.required<number>();

  //Constants
  private readonly overfilled: IHpBarColorSet = {
    "primary": "#992DE4",
    "secondary": "#d9cce3",
    "border": "#360b55"
  };

  private readonly below100: IHpBarColorSet = {
    "primary": "#00A9D4",
    "secondary": "#c6e6ee",
    "border": "#003a59"
  };

  //Internal attributes
  protected colorSet = signal<IHpBarColorSet>(this.below100);

  ngOnInit() {
    if(this.percentage() > 100){
      this.colorSet.set(this.overfilled);
    } 
    else
    {
      this.colorSet.set(this.below100);
    } 
  }
}
