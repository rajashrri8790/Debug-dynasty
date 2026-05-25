import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({

  selector: 'app-navbar',

  standalone: true,

  imports: [

    CommonModule,

    RouterModule

  ],

  templateUrl: './navbar.html',

  styleUrls: ['./navbar.scss']

})

export class Navbar {

  navItems = [

    {
      title: 'Home',
      route: '/'
    },

    {
      title: 'Hotels',
      route: '/hotel-list'
    },

    {
      title: 'Bookings',
      route: '/booking-form'
    },

    {
      title: 'Reviews',
      route: '/review-list'
    },

    {
      title: 'Dashboard',
      route: '/customer-dashboard'
    }

  ];

  isMenuOpen = false;

  toggleMenu() {

    this.isMenuOpen = !this.isMenuOpen;

  }

}