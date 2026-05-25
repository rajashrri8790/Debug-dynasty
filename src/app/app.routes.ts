import {

  Routes

} from '@angular/router';


// ======================
// AUTH
// ======================

import {

  Login

} from './features/auth/login/login';

import {

  Register

} from './features/auth/register/register';

import {

  ForgotPasswordComponent

} from './features/auth/forgot-password/forgot-password';


// ======================
// HOTELS
// ======================

import {

  LandingPage

} from './features/hotels/landing-page/landing-page';

import {

  HotelList

} from './features/hotels/hotel-list/hotel-list';

import {

  HotelDetails

} from './features/hotels/hotel-details/hotel-details';


// ======================
// BOOKINGS
// ======================

import {

  BookingFormComponent

} from './features/bookings/booking-form/booking-form';

import {

  BookingSummaryComponent

} from './features/bookings/booking-summary/booking-summary';

import {

  PaymentComponent

} from './features/bookings/payment/payment';


// ======================
// DASHBOARD
// ======================

import {

  AdminDashboard

} from './features/dashboard/admin-dashboard/admin-dashboard';

import {

  CustomerDashboard

} from './features/dashboard/customer-dashboard/customer-dashboard';

import {

  RevenueChart

} from './features/dashboard/revenue-chart/revenue-chart';


// ======================
// REVIEWS
// ======================

import {

  ReviewForm

} from './features/reviews/review-form/review-form';

import {

  ReviewList

} from './features/reviews/review-list/review-list';


// ======================
// ROUTES
// ======================

export const routes: Routes = [

  // HOME

  {

    path: '',

    component: LandingPage

  },

  // LOGIN

  {

    path: 'login',

    component: Login

  },

  // REGISTER

  {

    path: 'register',

    component: Register

  },

  // FORGOT PASSWORD

  {

    path: 'forgot-password',

    component: ForgotPasswordComponent

  },

  // HOTEL LIST

  {

    path: 'hotel-list',

    component: HotelList

  },

  // HOTEL DETAILS

  {

    path: 'hotel-details',

    component: HotelDetails

  },

  // BOOKING FORM

  {

    path: 'booking-form',

    component: BookingFormComponent

  },

  // BOOKING SUMMARY

  {

    path: 'booking-summary',

    component: BookingSummaryComponent

  },

  // PAYMENT

  {

    path: 'payment',

    component: PaymentComponent

  },

  // ADMIN DASHBOARD

  {

    path: 'admin-dashboard',

    component: AdminDashboard

  },

  // CUSTOMER DASHBOARD

  {

    path: 'customer-dashboard',

    component: CustomerDashboard

  },

  // REVENUE CHART

  {

    path: 'revenue-chart',

    component: RevenueChart

  },

  // REVIEW FORM

  {

    path: 'review-form',

    component: ReviewForm

  },

  // REVIEW LIST

  {

    path: 'review-list',

    component: ReviewList

  },

  // INVALID ROUTE

  {

    path: '**',

    redirectTo: ''

  }

];