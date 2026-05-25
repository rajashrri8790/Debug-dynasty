import {
  ApplicationConfig
} from '@angular/core';

import {
  provideRouter
} from '@angular/router';

import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';

import {
  provideAnimations
} from '@angular/platform-browser/animations';


// Routes

import {
  routes
} from './app.routes';


// JWT Interceptor

import {
  jwtInterceptor
} from './core/interceptors/jwt-interceptor';


// Error Interceptor

import {
  errorInterceptor
} from './core/interceptors/error-interceptor';


export const appConfig:
ApplicationConfig = {

  providers: [

    // Angular Routing

    provideRouter(routes),

    // HTTP Client + Interceptors

    provideHttpClient(

      withInterceptors([

        jwtInterceptor,

        errorInterceptor

      ])

    ),

    // Angular Animations

    provideAnimations()

  ]

};