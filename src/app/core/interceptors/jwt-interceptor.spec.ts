/// <reference types="jasmine" />

import {
  HttpRequest,
  HttpHandlerFn
} from '@angular/common/http';

import {
  of
} from 'rxjs';

import {
  jwtInterceptor
} from './jwt-interceptor';

describe('jwtInterceptor', () => {

  // ✅ Interceptor Created

  it('should create interceptor', () => {

    expect(jwtInterceptor)
      .toBeTruthy();

  });

  // ✅ Add JWT Token

  it('should add authorization header', (done) => {

    // Store Token

    localStorage.setItem(

      'stayease_token',

      'sampleToken'

    );

    const request =
      new HttpRequest(
        'GET',
        '/test'
      );

    const next:
      HttpHandlerFn = (req) => {

        expect(

          req.headers.get(
            'Authorization'
          )

        ).toBe(
          'Bearer sampleToken'
        );

        return of({} as any);

      };

    jwtInterceptor(
      request,
      next
    ).subscribe({

      next: () => {

        expect(true)
          .toBe(true);

        done();

      }

    });

  });

  // ✅ Request Without Token

  it('should pass request without token', (done) => {

    localStorage.removeItem(
      'stayease_token'
    );

    const request =
      new HttpRequest(
        'GET',
        '/test'
      );

    const next:
      HttpHandlerFn = (req) => {

        expect(

          req.headers.has(
            'Authorization'
          )

        ).toBe(false);

        return of({} as any);

      };

    jwtInterceptor(
      request,
      next
    ).subscribe({

      next: () => {

        expect(true)
          .toBe(true);

        done();

      }

    });

  });

});