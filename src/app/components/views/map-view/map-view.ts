import { Component } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatTab, MatTabGroup, MatTabLabel } from '@angular/material/tabs';
import { MapDiceRollerSidenav } from '../map-dice-roller-sidenav/map-dice-roller-sidenav';
import { MapLinksSidenav } from '../map-links-sidenav/map-links-sidenav';
import { MapUnitsSidenav } from '../map-units-sidenav/map-units-sidenav';
import { MapTilesSidenav } from '../map-tiles-sidenav/map-tiles-sidenav';

@Component({
  selector: 'map-view',
  imports: [MatSidenav, MatSidenavContainer, MatSidenavContent, MatTab, MatTabGroup, MatTabLabel, MapLinksSidenav, MapUnitsSidenav, MapTilesSidenav, MapDiceRollerSidenav],
  templateUrl: './map-view.html',
  styleUrl: './map-view.scss',
})
export class MapView {

}
