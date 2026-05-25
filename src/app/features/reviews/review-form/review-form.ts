import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-review-form',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl: './review-form.html',

  styleUrls: ['./review-form.scss']
})

export class ReviewForm {

  reviewForm!: FormGroup;

  selectedRating = 0;

  stars = [1, 2, 3, 4, 5];

  loading = false;

  constructor(
    private fb: FormBuilder
  ) {

    this.reviewForm = this.fb.group({

      userName: [
        '',
        [
          Validators.required
        ]
      ],

      hotelName: [
        '',
        [
          Validators.required
        ]
      ],

      reviewMessage: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]

    });

  }

  setRating(rating: number) {

    this.selectedRating = rating;

  }

  submitReview() {

    if (
      this.reviewForm.invalid ||
      this.selectedRating === 0
    ) {

      this.reviewForm.markAllAsTouched();

      alert('Please fill all fields');

      return;
    }

    this.loading = true;

    setTimeout(() => {

      this.loading = false;

      alert('Review Submitted Successfully 🎉');

      this.reviewForm.reset();

      this.selectedRating = 0;

    }, 2000);

  }

}