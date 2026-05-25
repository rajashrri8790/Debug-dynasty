import {
  CanActivateFn
} from '@angular/router';

import {
  Router
} from '@angular/router';

import {
  inject
} from '@angular/core';

export const authGuard:
CanActivateFn = (route, state) => {

  const router = inject(Router);

  const token =
    localStorage.getItem('stayease_token');

  // If token exists

  if (token) {

    return true;

  }

  // Redirect to login

  router.navigate(['/login']);

  return false;

};