import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './admin-dashboard.html',

  styleUrls: ['./admin-dashboard.scss']
})

export class AdminDashboard {

  dashboardCards = [

    {
      title: 'Total Hotels',
      count: 120,
      icon: '🏨'
    },

    {
      title: 'Total Rooms',
      count: 850,
      icon: '🛏️'
    },

    {
      title: 'Bookings',
      count: 1450,
      icon: '📅'
    },

    {
      title: 'Revenue',
      count: '₹12L',
      icon: '💰'
    }

  ];

  recentBookings = [

    {
      customer: 'Sameera',
      hotel: 'StayEase Resort',
      amount: '₹15,700',
      status: 'Confirmed'
    },

    {
      customer: 'Vaishnavi',
      hotel: 'Luxury Palace',
      amount: '₹9,500',
      status: 'Pending'
    },

    {
      customer: 'Rahul',
      hotel: 'Ocean View',
      amount: '₹20,000',
      status: 'Confirmed'
    }

  ];

}