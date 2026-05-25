import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  RevenueChart
} from './revenue-chart';

describe('RevenueChartComponent', () => {

  let component: RevenueChart;

  let fixture:
    ComponentFixture<RevenueChart>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        RevenueChart
      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        RevenueChart
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Created

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Chart Labels

  it('should contain chart labels', () => {

    expect(component.barChartLabels.length)
      .toBeGreaterThan(0);

  });

  // ✅ Chart Data

  it('should contain revenue data', () => {

    expect(
      component.barChartData.datasets[0].data.length
    ).toBeGreaterThan(0);

  });

  // ✅ Chart Options

  it('should contain chart options', () => {

    expect(component.barChartOptions)
      .toBeTruthy();

  });

});