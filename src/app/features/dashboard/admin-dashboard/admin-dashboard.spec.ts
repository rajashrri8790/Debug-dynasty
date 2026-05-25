import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  AdminDashboard
} from './admin-dashboard';

describe('AdminDashboardComponent', () => {

  let component: AdminDashboard;

  let fixture:
    ComponentFixture<AdminDashboard>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        AdminDashboard
      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        AdminDashboard
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Created

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Dashboard Cards

  it('should contain dashboard cards', () => {

    expect(component.dashboardCards.length)
      .toBeGreaterThan(0);

  });

  // ✅ Recent Bookings

  it('should contain recent bookings', () => {

    expect(component.recentBookings.length)
      .toBeGreaterThan(0);

  });

  // ✅ Revenue Card

  it('should contain revenue data', () => {

    const revenueCard =
      component.dashboardCards.find(
        card => card.title === 'Revenue'
      );

    expect(revenueCard)
      .toBeTruthy();

  });

});