import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotel-card',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './hotel-card.html',

  styleUrls: ['./hotel-card.scss']
})

export class HotelCardComponent {

  @Input() hotel: any = {

    hotelName: 'StayEase Luxury Resort',

    location: 'Goa, India',

    rating: 4.8,

    price: 6500,

    image:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945',

    description:
    'Luxury beachfront resort with premium facilities.'

  };

}