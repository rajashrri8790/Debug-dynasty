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
  selector: 'app-booking-form',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],

  templateUrl: './booking-form.html',

  styleUrls: ['./booking-form.scss']
})

export class BookingFormComponent {

  bookingForm!: FormGroup;

  loading = false;

  totalAmount = 0;

  constructor(
    private fb: FormBuilder
  ) {

    this.bookingForm = this.fb.group({

      fullName: [
        '',
        [
          Validators.required
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      checkInDate: [
        '',
        [
          Validators.required
        ]
      ],

      checkOutDate: [
        '',
        [
          Validators.required
        ]
      ],

      guests: [
        '',
        [
          Validators.required
        ]
      ],

      roomType: [
        '',
        [
          Validators.required
        ]
      ],

      couponCode: ['']

    });

  }

  calculateTotal() {

    const roomPrice = 5000;

    const guests =
      this.bookingForm.value.guests || 1;

    this.totalAmount =
      roomPrice * guests;

  }

  submitBooking() {

    if (this.bookingForm.invalid) {

      this.bookingForm.markAllAsTouched();

      return;
    }

    this.loading = true;

    this.calculateTotal();

    setTimeout(() => {

      this.loading = false;

      alert(
        'Booking Confirmed Successfully'
      );

      this.bookingForm.reset();

    }, 2000);

  }

}