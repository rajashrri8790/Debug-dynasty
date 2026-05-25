import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login } from './login';

describe('LoginComponent', () => {

  let component: Login;

  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        Login
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(Login);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Creation

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Login Form Exists

  it('should contain login form', () => {

    expect(component.loginForm).toBeTruthy();

  });

  // ✅ Empty Form Invalid

  it('should make form invalid when empty', () => {

    expect(component.loginForm.valid)
      .toBeFalsy();

  });

  // ✅ Email Required

  it('should validate email field', () => {

    const email =
      component.loginForm.controls['email'];

    email.setValue('');

    expect(email.valid)
      .toBeFalsy();

  });

  // ✅ Invalid Email

  it('should validate email format', () => {

    const email =
      component.loginForm.controls['email'];

    email.setValue('wrongemail');

    expect(email.valid)
      .toBeFalsy();

  });

  // ✅ Password Required

  it('should validate password field', () => {

    const password =
      component.loginForm.controls['password'];

    password.setValue('');

    expect(password.valid)
      .toBeFalsy();

  });

  // ✅ Valid Form

  it('should validate form when correct values entered', () => {

    component.loginForm.setValue({

      email: 'sameera@gmail.com',

      password: '123456'

    });

    expect(component.loginForm.valid)
      .toBeTruthy();

  });

});