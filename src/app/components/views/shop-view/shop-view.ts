import { Component, inject } from '@angular/core';
import { ShopDataService } from '../../../services/shop-data-service';
import { BreakpointService } from '../../../services/breakpoint-service';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { LinksSidenav } from "../links-sidenav/links-sidenav";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'shop-view',
  imports: [MatSidenavModule, MatTabsModule, LinksSidenav, MatButtonModule],
  templateUrl: './shop-view.html',
  styleUrl: './shop-view.scss',
})
export class ShopView {

  constructor(protected shopDataService: ShopDataService, protected breakpointService: BreakpointService) {
    this.shopDataService = inject(ShopDataService);
    this.breakpointService = inject(BreakpointService);
  }
}
