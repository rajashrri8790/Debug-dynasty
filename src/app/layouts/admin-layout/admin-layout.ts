import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-layout',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './admin-layout.html',

  styleUrls: ['./admin-layout.scss']
})

export class AdminLayout {

  sidebarItems = [

    {
      icon: '🏠',
      title: 'Dashboard',
      route: '/admin-dashboard'
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
      icon: '💰',
      title: 'Revenue',
      route: '/revenue-chart'
    },

    {
      icon: '⭐',
      title: 'Reviews',
      route: '/review-list'
    },

    {
      icon: '⚙️',
      title: 'Settings',
      route: '/settings'
    }

  ];

}