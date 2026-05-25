import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotel-details',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './hotel-details.html',

  styleUrls: ['./hotel-details.scss']
})

export class HotelDetails {

  hotel = {

    hotelName: 'StayEase Luxury Resort',

    location: 'Goa, India',

    rating: 4.9,

    price: 6500,

    image:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945',

    description:
    'Experience luxury beachfront stays with infinity pools, spa, premium suites, and world-class dining.',

    amenities: [

      'Free WiFi',
      'Swimming Pool',
      'Spa',
      'Gym',
      'Restaurant',
      'Parking'

    ],

    nearbyAttractions: [

      'Baga Beach',
      'Casino Royale',
      'Goa Mall',
      'Night Market'

    ],

    rooms: [

      {
        type: 'Single Room',
        price: 4500
      },

      {
        type: 'Deluxe Room',
        price: 6500
      },

      {
        type: 'Suite Room',
        price: 9000
      }

    ]

  };

}