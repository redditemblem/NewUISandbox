import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Home } from './components/views/home/home';
import { MapView } from './components/views/map-view/map-view';
import { MapAnalysisView } from './components/views/map-analysis-view/map-analysis-view';
import { ConvoyView } from './components/views/convoy-view/convoy-view';
import { ShopView } from './components/views/shop-view/shop-view';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, Home, MapView, MapAnalysisView, ConvoyView, ShopView],
  templateUrl: './app.html'
})
export class App { }
