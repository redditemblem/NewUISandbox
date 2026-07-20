import { Component } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'map-paint-sidenav',
  imports: [MatListModule, MatIconModule],
  templateUrl: './map-paint-sidenav.html',
  styleUrl: './map-paint-sidenav.scss',
})
export class MapPaintSidenav {

}
