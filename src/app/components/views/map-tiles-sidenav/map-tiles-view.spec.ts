import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTilesView } from './map-tiles-view';

describe('MapTilesView', () => {
  let component: MapTilesView;
  let fixture: ComponentFixture<MapTilesView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapTilesView],
    }).compileComponents();

    fixture = TestBed.createComponent(MapTilesView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
