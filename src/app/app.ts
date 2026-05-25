import { Component } from '@angular/core';

import {
  RouterOutlet
} from '@angular/router';

import {
  Navbar
} from './layouts/navbar/navbar';

import {
  Footer
} from './layouts/footer/footer';

@Component({

  selector: 'app-root',

  standalone: true,

  imports: [

    RouterOutlet,

    Navbar,

    Footer

  ],

  templateUrl: './app.html',

  styleUrls: ['./app.scss']

})

export class App {

}