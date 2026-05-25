import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './landing-page.html',

  styleUrls: ['./landing-page.scss']
})

export class LandingPage {

  hotels = [

    {
      hotelName: 'StayEase Luxury Resort',

      location: 'Goa, India',

      rating: 4.9,

      price: 6500,

      image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945',

      description:
      'Luxury beachfront hotel with infinity pool and spa.'
    },

    {
      hotelName: 'Ocean Paradise',

      location: 'Maldives',

      rating: 4.8,

      price: 8500,

      image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',

      description:
      'Premium sea-view suites with world-class facilities.'
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
    }

  ];

  popularDestinations = [

    'Goa',

    'Maldives',

    'Dubai',

    'Manali',

    'Bali'

  ];

  offers = [

    {
      title: 'Summer Offer',

      discount: '30% OFF'
    },

    {
      title: 'Luxury Stay',

      discount: '20% OFF'
    }

  ];

}