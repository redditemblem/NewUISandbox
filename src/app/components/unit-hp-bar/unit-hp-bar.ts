import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'unit-hp-bar',
  imports: [NgStyle],
  templateUrl: './unit-hp-bar.html',
  styles: `
    div.hpBar {
      width: 100%;
      height: 6px;
    }
  `
})
export class UnitHpBar {
  percentage = input.required<number>();

  private readonly overfilledPrimary : string = "#992DE4";
  private readonly overfilledSecondary : string = "#d9cce3";
  private readonly overfilledBorder : string = "#360b55";

  private readonly above50Primary : string = "#3CD66F";
  private readonly above50Secondary : string = "#d3efdd";
  private readonly above50Border : string = "#114923";

  private readonly above25Primary : string = "#FFC107";
  private readonly above25Secondary : string = "#fff4d4";
  private readonly above25Border : string = "#9d6b00";

  private readonly below25Primary : string = "#F13535";
  private readonly below25Secondary : string = "#efd1d1";
  private readonly below25Border : string = "#640707";

  public primaryColor : string = this.above50Primary;
  public secondaryColor : string = this.above50Secondary;
  public borderColor : string = this.above50Border;

  //Called every time this.percentage() updates
  ngOnChanges() {
    if(this.percentage() > 100){
      this.primaryColor = this.overfilledPrimary;
      this.secondaryColor = this.overfilledSecondary;
      this.borderColor = this.overfilledBorder;
    } 
    else if(this.percentage() <= 100 && this.percentage() > 50)
    {
      this.primaryColor = this.above50Primary;
      this.secondaryColor = this.above50Secondary;
      this.borderColor = this.above50Border;
    } 
    else if(this.percentage() <= 50 && this.percentage() > 25)
    {
      this.primaryColor = this.above25Primary;
      this.secondaryColor = this.above25Secondary;
      this.borderColor = this.above25Border;
    }
    else
    {
      this.primaryColor = this.below25Primary;
      this.secondaryColor = this.below25Secondary;
      this.borderColor = this.below25Border;
    }
  }
}
