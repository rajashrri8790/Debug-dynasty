import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordComponent }
from './forgot-password';

describe('ForgotPasswordComponent', () => {

  let component: ForgotPasswordComponent;

  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        ForgotPasswordComponent
      ]

    })
    .compileComponents();

    fixture =
      TestBed.createComponent(
        ForgotPasswordComponent
      );

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Created

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Form Exists

  it('should contain forgot password form', () => {

    expect(component.forgotPasswordForm)
      .toBeTruthy();

  });

  // ✅ Empty Form Invalid

  it('should make form invalid when empty', () => {

    expect(component.forgotPasswordForm.valid)
      .toBeFalsy();

  });

  // ✅ Email Required

  it('should validate email field', () => {

    const email =
      component.forgotPasswordForm.controls['email'];

    email.setValue('');

    expect(email.valid)
      .toBeFalsy();

  });

  // ✅ Invalid Email

  it('should validate email format', () => {

    const email =
      component.forgotPasswordForm.controls['email'];

    email.setValue('wrongemail');

    expect(email.valid)
      .toBeFalsy();

  });

  // ✅ Valid Form

  it('should validate form when correct email entered', () => {

    component.forgotPasswordForm.setValue({

      email: 'sameera@gmail.com'

    });

    expect(component.forgotPasswordForm.valid)
      .toBeTruthy();

  });

});