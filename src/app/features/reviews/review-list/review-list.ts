import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-list',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './review-list.html',

  styleUrls: ['./review-list.scss']
})

export class ReviewList {

  reviews = [

    {
      userName: 'Sameera',

      hotelName: 'StayEase Luxury Resort',

      rating: 5,

      comment:
      'Amazing luxury experience with beautiful sea view and premium service.',

      date: '25 May 2026'
    },

    {
      userName: 'Vaishnavi',

      hotelName: 'Ocean Paradise',

      rating: 4,

      comment:
      'Very comfortable rooms and excellent hospitality.',

      date: '20 May 2026'
    },

    {
      userName: 'Rahul',

      hotelName: 'Mountain Retreat',

      rating: 5,

      comment:
      'Perfect mountain getaway with peaceful atmosphere.',

      date: '18 May 2026'
    }

  ];

}