import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  BookingFormComponent
} from './booking-form';

describe('BookingFormComponent', () => {

  let component: BookingFormComponent;

  let fixture:
    ComponentFixture<BookingFormComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        BookingFormComponent
      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        BookingFormComponent
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Created

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Form Exists

  it('should contain booking form', () => {

    expect(component.bookingForm)
      .toBeTruthy();

  });

  // ✅ Empty Form Invalid

  it('should make form invalid when empty', () => {

    expect(component.bookingForm.valid)
      .toBeFalsy();

  });

  // ✅ Full Name Required

  it('should validate fullName field', () => {

    const fullName =
      component.bookingForm.controls['fullName'];

    fullName.setValue('');

    expect(fullName.valid)
      .toBeFalsy();

  });

  // ✅ Email Validation

  it('should validate email field', () => {

    const email =
      component.bookingForm.controls['email'];

    email.setValue('wrongemail');

    expect(email.valid)
      .toBeFalsy();

  });

  // ✅ Valid Form

  it('should validate form when correct values entered', () => {

    component.bookingForm.setValue({

      fullName: 'Sameera',

      email: 'sameera@gmail.com',

      checkInDate: '2026-05-30',

      checkOutDate: '2026-06-02',

      guests: 2,

      roomType: 'Suite',

      couponCode: 'HOTEL10'

    });

    expect(component.bookingForm.valid)
      .toBeTruthy();

  });

});