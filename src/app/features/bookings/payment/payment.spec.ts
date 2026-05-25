import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  PaymentComponent
} from './payment';

describe('PaymentComponent', () => {

  let component: PaymentComponent;

  let fixture:
    ComponentFixture<PaymentComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        PaymentComponent
      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        PaymentComponent
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Created

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Payment Form Exists

  it('should contain payment form', () => {

    expect(component.paymentForm)
      .toBeTruthy();

  });

  // ✅ Empty Form Invalid

  it('should make form invalid when empty', () => {

    expect(component.paymentForm.valid)
      .toBeFalsy();

  });

  // ✅ Card Holder Required

  it('should validate card holder name', () => {

    const cardHolder =
      component.paymentForm.controls['cardHolderName'];

    cardHolder.setValue('');

    expect(cardHolder.valid)
      .toBeFalsy();

  });

  // ✅ Card Number Validation

  it('should validate card number', () => {

    const cardNumber =
      component.paymentForm.controls['cardNumber'];

    cardNumber.setValue('123');

    expect(cardNumber.valid)
      .toBeFalsy();

  });

  // ✅ Valid Form

  it('should validate form when correct values entered', () => {

    component.paymentForm.setValue({

      cardHolderName: 'Sameera',

      cardNumber: '1234567890123456',

      expiryDate: '2028-06',

      cvv: '123',

      paymentMethod: 'Card'

    });

    expect(component.paymentForm.valid)
      .toBeTruthy();

  });

});