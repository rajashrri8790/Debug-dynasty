import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './customer-dashboard.html',

  styleUrls: ['./customer-dashboard.scss']
})

export class CustomerDashboard{

  loyaltyPoints = 2450;

  upcomingBookings = [

    {
      hotel: 'StayEase Luxury Resort',
      room: 'Suite Room',
      checkIn: '30 May 2026',
      checkOut: '02 June 2026',
      status: 'Confirmed'
    },

    {
      hotel: 'Ocean View Palace',
      room: 'Deluxe Room',
      checkIn: '10 June 2026',
      checkOut: '15 June 2026',
      status: 'Pending'
    }

  ];

  bookingHistory = [

    {
      hotel: 'Royal Inn',
      amount: '₹12,500',
      status: 'Completed'
    },

    {
      hotel: 'Luxury Palace',
      amount: '₹9,000',
      status: 'Completed'
    }

  ];

  savedHotels = [

    {
      name: 'Ocean Paradise',
      location: 'Goa'
    },

    {
      name: 'Mountain Retreat',
      location: 'Manali'
    }

  ];

}