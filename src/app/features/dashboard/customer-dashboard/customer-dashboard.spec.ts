import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  CustomerDashboard
} from './customer-dashboard';

describe('CustomerDashboardComponent', () => {

  let component: CustomerDashboard;

  let fixture:
    ComponentFixture<CustomerDashboard>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        CustomerDashboard
      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        CustomerDashboard
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Created

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Loyalty Points

  it('should contain loyalty points', () => {

    expect(component.loyaltyPoints)
      .toBeGreaterThan(0);

  });

  // ✅ Upcoming Bookings

  it('should contain upcoming bookings', () => {

    expect(component.upcomingBookings.length)
      .toBeGreaterThan(0);

  });

  // ✅ Booking History

  it('should contain booking history', () => {

    expect(component.bookingHistory.length)
      .toBeGreaterThan(0);

  });

  // ✅ Saved Hotels

  it('should contain saved hotels', () => {

    expect(component.savedHotels.length)
      .toBeGreaterThan(0);

  });

});