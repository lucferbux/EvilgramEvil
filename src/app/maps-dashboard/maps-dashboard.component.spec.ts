
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsDashboardComponent } from './maps-dashboard.component';

describe('MapsDashboardComponent', () => {
  let component: MapsDashboardComponent;
  let fixture: ComponentFixture<MapsDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
