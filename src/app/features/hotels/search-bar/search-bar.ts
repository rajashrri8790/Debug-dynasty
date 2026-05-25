import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

@Component({
  selector: 'app-search-bar',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './search-bar.html',

  styleUrls: ['./search-bar.scss']
})

export class SearchBar {

  searchText = '';

  location = '';

  guests = 1;

  checkIn = '';

  checkOut = '';

  searchHotels() {

    alert(

      `Searching Hotels:
      
Location: ${this.location}

Guests: ${this.guests}

Search: ${this.searchText}`

    );

  }

}