import { NgModule } from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';


// Components

import { BookingFormComponent }
from './booking-form/booking-form';

import { BookingSummaryComponent }
from './booking-summary/booking-summary';

import { PaymentComponent }
from './payment/payment';


// Routes

const routes: Routes = [

  // Booking Form

  {
    path: 'booking-form',
    component: BookingFormComponent
  },

  // Booking Summary

  {
    path: 'booking-summary',
    component: BookingSummaryComponent
  },

  // Payment

  {
    path: 'payment',
    component: PaymentComponent
  }

];

@NgModule({

  imports: [

    RouterModule.forChild(routes)

  ],

  exports: [

    RouterModule

  ]

})

export class BookingsRoutingModule { }