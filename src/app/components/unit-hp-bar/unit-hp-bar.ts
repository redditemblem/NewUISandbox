import { Component, input, OnChanges, signal } from '@angular/core';

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
  public percentage = input.required<number>();

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

  protected primaryColor = signal<string>(this.above50Primary);
  protected secondaryColor = signal<string>(this.above50Secondary);
  protected borderColor = signal<string>(this.above50Border);

  ngOnChanges() {
    if(this.percentage() > 100){
      this.primaryColor.set(this.overfilledPrimary);
      this.secondaryColor.set(this.overfilledSecondary);
      this.borderColor.set(this.overfilledBorder);
    } 
    else if(this.percentage() <= 100 && this.percentage() > 50)
    {
      this.primaryColor.set(this.above50Primary);
      this.secondaryColor.set(this.above50Secondary);
      this.borderColor.set(this.above50Border);
    } 
    else if(this.percentage() <= 50 && this.percentage() > 25)
    {
      this.primaryColor.set(this.above25Primary);
      this.secondaryColor.set(this.above25Secondary);
      this.borderColor.set(this.above25Border);
    }
    else
    {
      this.primaryColor.set(this.below25Primary);
      this.secondaryColor.set(this.below25Secondary);
      this.borderColor.set(this.below25Border);
    }
  }
}
