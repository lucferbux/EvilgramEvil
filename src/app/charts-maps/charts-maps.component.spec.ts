import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsMapsComponent } from './charts-maps.component';

describe('ChartsMapsComponent', () => {
  let component: ChartsMapsComponent;
  let fixture: ComponentFixture<ChartsMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
