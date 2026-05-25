import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotel-list',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './hotel-list.html',

  styleUrls: ['./hotel-list.scss']
})

export class HotelList {

  hotels = [

    {
      hotelName: 'StayEase Luxury Resort',

      location: 'Goa, India',

      rating: 4.9,

      price: 6500,

      image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945',

      description:
      'Luxury beachfront hotel with infinity pool.'
    },

    {
      hotelName: 'Ocean Paradise',

      location: 'Maldives',

      rating: 4.8,

      price: 8500,

      image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',

      description:
      'Premium sea-view suites with spa.'
    },

    {
      hotelName: 'Mountain Retreat',

      location: 'Manali',

      rating: 4.7,

      price: 5200,

      image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',

      description:
      'Nature-inspired luxury mountain resort.'
    },

    {
      hotelName: 'Royal Palace Hotel',

      location: 'Jaipur',

      rating: 4.6,

      price: 7200,

      image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',

      description:
      'Royal heritage hotel with premium rooms.'
    }

  ];

}