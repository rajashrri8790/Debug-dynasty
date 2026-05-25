/// <reference types="jasmine" />

import {
  TestBed
} from '@angular/core/testing';

import {
  Router
} from '@angular/router';

import {
  roleGuard
} from './role-guard';

describe('roleGuard', () => {

  let router: any;

  beforeEach(() => {

    router = {

      navigate:
      jasmine.createSpy('navigate')

    };

    TestBed.configureTestingModule({

      providers: [

        {
          provide: Router,
          useValue: router
        }

      ]

    });

  });

  // ✅ Allow Admin Role

  it('should allow admin role', () => {

    localStorage.setItem(
      'user_role',
      'admin'
    );

    const route: any = {

      data: {

        roles: ['admin']

      }

    };

    const result =
      TestBed.runInInjectionContext(() =>
        roleGuard(route, {} as any)
      );

    expect(result)
      .toBe(true);

  });

  // ✅ Reject User Role

  it('should reject invalid role', () => {

    localStorage.setItem(
      'user_role',
      'customer'
    );

    const route: any = {

      data: {

        roles: ['admin']

      }

    };

    const result =
      TestBed.runInInjectionContext(() =>
        roleGuard(route, {} as any)
      );

    expect(result)
      .toBe(false);

    expect(router.navigate)
      .toHaveBeenCalledWith(['/login']);

  });

});