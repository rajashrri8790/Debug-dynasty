import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],

  templateUrl: './forgot-password.html',

  styleUrls: ['./forgot-password.scss']
})

export class ForgotPasswordComponent {

  forgotPasswordForm!: FormGroup;

  loading = false;

  constructor(
    private fb: FormBuilder
  ) {

    this.forgotPasswordForm = this.fb.group({

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ]

    });

  }

  sendResetLink() {

    if (this.forgotPasswordForm.invalid) {

      this.forgotPasswordForm.markAllAsTouched();

      return;
    }

    this.loading = true;

    setTimeout(() => {

      this.loading = false;

      alert('Password reset link sent successfully');

      this.forgotPasswordForm.reset();

    }, 2000);

  }

}