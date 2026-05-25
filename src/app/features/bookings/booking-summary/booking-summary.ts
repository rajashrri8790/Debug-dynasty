import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-booking-summary',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './booking-summary.html',

  styleUrls: ['./booking-summary.scss']
})

export class BookingSummaryComponent {

  booking = {

    hotelName: 'StayEase Luxury Resort',

    roomType: 'Suite Room',

    guestName: 'Sameera',

    guests: 2,

    checkInDate: '30 May 2026',

    checkOutDate: '02 June 2026',

    nights: 3,

    roomPrice: 5000,

    taxes: 1200,

    couponDiscount: 500,

    totalAmount: 15700,

    reservationNumber: 'SE458962'

  };

}