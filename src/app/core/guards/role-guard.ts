import {
  CanActivateFn
} from '@angular/router';

import {
  Router
} from '@angular/router';

import {
  inject
} from '@angular/core';

export const roleGuard:
CanActivateFn = (route, state) => {

  const router = inject(Router);

  // Get User Role

  const role =
    localStorage.getItem('user_role');

  // Allowed Roles

  const allowedRoles =
    route.data?.['roles'] || [];

  // Check Role

  if (
    role &&
    allowedRoles.includes(role)
  ) {

    return true;

  }

  // Redirect

  router.navigate(['/login']);

  return false;

};