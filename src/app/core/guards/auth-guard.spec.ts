/// <reference types="jasmine" />

import {
  TestBed
} from '@angular/core/testing';

import {
  Router
} from '@angular/router';

import {
  authGuard
} from './auth-guard';

describe('authGuard', () => {

  let router: any;

  beforeEach(() => {

    router = {

      navigate: jasmine.createSpy('navigate')

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

  // ✅ Allow Access

  it('should allow access if token exists', () => {

    localStorage.setItem(
      'stayease_token',
      'sampleToken'
    );

    const result =
      TestBed.runInInjectionContext(() =>
        authGuard({} as any, {} as any)
      );

    expect(result)
      .toBe(true);

  });

  // ✅ Redirect Login

  it('should redirect to login if token missing', () => {

    localStorage.removeItem(
      'stayease_token'
    );

    const result =
      TestBed.runInInjectionContext(() =>
        authGuard({} as any, {} as any)
      );

    expect(result)
      .toBe(false);

    expect(router.navigate)
      .toHaveBeenCalledWith(['/login']);

  });

});