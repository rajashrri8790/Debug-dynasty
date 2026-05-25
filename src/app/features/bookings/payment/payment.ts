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
  selector: 'app-payment',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],

  templateUrl: './payment.html',

  styleUrls: ['./payment.scss']
})

export class PaymentComponent {

  paymentForm!: FormGroup;

  loading = false;

  bookingAmount = 15700;

  constructor(
    private fb: FormBuilder
  ) {

    this.paymentForm = this.fb.group({

      cardHolderName: [
        '',
        [
          Validators.required
        ]
      ],

      cardNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(16)
        ]
      ],

      expiryDate: [
        '',
        [
          Validators.required
        ]
      ],

      cvv: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      paymentMethod: [
        'Card',
        [
          Validators.required
        ]
      ]

    });

  }

  makePayment() {

    if (this.paymentForm.invalid) {

      this.paymentForm.markAllAsTouched();

      return;
    }

    this.loading = true;

    setTimeout(() => {

      this.loading = false;

      alert(
        'Payment Successful 🎉'
      );

      this.paymentForm.reset();

    }, 2500);

  }

}