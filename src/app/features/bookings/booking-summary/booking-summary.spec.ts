import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  BookingSummaryComponent
} from './booking-summary';

describe('BookingSummaryComponent', () => {

  let component: BookingSummaryComponent;

  let fixture:
    ComponentFixture<BookingSummaryComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        BookingSummaryComponent
      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        BookingSummaryComponent
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Creation

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Booking Data Exists

  it('should contain booking details', () => {

    expect(component.booking)
      .toBeTruthy();

  });

  // ✅ Hotel Name Test

  it('should have hotel name', () => {

    expect(component.booking.hotelName)
      .toContain('StayEase');

  });

  // ✅ Reservation Number Test

  it('should have reservation number', () => {

    expect(component.booking.reservationNumber)
      .toBeTruthy();

  });

  // ✅ Total Amount Test

  it('should have valid total amount', () => {

    expect(component.booking.totalAmount)
      .toBeGreaterThan(0);

  });

});