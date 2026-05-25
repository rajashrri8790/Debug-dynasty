import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './sidebar.html',

  styleUrls: ['./sidebar.scss']
})

export class Sidebar {

  menuItems = [

    {
      icon: '🏠',
      title: 'Dashboard',
      route: '/customer-dashboard'
    },

    {
      icon: '🏨',
      title: 'Hotels',
      route: '/hotel-list'
    },

    {
      icon: '📅',
      title: 'Bookings',
      route: '/booking-form'
    },

    {
      icon: '💳',
      title: 'Payments',
      route: '/payment'
    },

    {
      icon: '⭐',
      title: 'Reviews',
      route: '/review-list'
    },

    {
      icon: '📊',
      title: 'Revenue',
      route: '/revenue-chart'
    },

    {
      icon: '⚙️',
      title: 'Settings',
      route: '/settings'
    }

  ];

}