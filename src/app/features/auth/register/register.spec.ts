import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Register } from './register';

describe('RegisterComponent', () => {

  let component: Register;

  let fixture: ComponentFixture<Register>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        Register
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(Register);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  // ✅ Component Creation

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  // ✅ Form Should Exist

  it('should contain register form', () => {

    expect(component.registerForm).toBeTruthy();

  });

  // ✅ Form Invalid Initially

  it('should make form invalid when empty', () => {

    expect(component.registerForm.valid)
      .toBeFalsy();

  });

  // ✅ Username Required

  it('should validate username', () => {

    const username =
      component.registerForm.controls['username'];

    username.setValue('');

    expect(username.valid)
      .toBeFalsy();

  });

  // ✅ Email Validation

  it('should validate email format', () => {

    const email =
      component.registerForm.controls['email'];

    email.setValue('wrongemail');

    expect(email.valid)
      .toBeFalsy();

  });

  // ✅ Password Validation

  it('should validate password length', () => {

    const password =
      component.registerForm.controls['password'];

    password.setValue('123');

    expect(password.valid)
      .toBeFalsy();

  });

  // ✅ Valid Form

  it('should validate form when correct values entered', () => {

    component.registerForm.setValue({

      username: 'sameera',

      email: 'sameera@gmail.com',

      password: '123456'

    });

    expect(component.registerForm.valid)
      .toBeTruthy();

  });

});