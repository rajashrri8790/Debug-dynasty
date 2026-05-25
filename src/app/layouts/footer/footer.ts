import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({

  selector: 'app-footer',

  standalone: true,

  imports: [

    CommonModule,

    RouterModule

  ],

  templateUrl: './footer.html',

  styleUrls: ['./footer.scss']

})

export class Footer {

  // QUICK LINKS

  quickLinks = [

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

    }

  ];

  // SOCIAL LINKS

  socialLinks = [

    {

      icon: '📘',

      name: 'Facebook'

    },

    {

      icon: '📸',

      name: 'Instagram'

    },

    {

      icon: '🐦',

      name: 'Twitter'

    }

  ];

}