/// <reference types="jasmine" />

import {

  HttpRequest,

  HttpHandlerFn,

  HttpErrorResponse

} from '@angular/common/http';

import {

  of,

  throwError

} from 'rxjs';

import {

  errorInterceptor

} from './error-interceptor';


describe('errorInterceptor', () => {

  // ✅ Create Interceptor

  it('should create interceptor', () => {

    expect(errorInterceptor)
      .toBeTruthy();

  });

  // ✅ Handle 401 Error

  it('should handle 401 error', (done) => {

    spyOn(window, 'alert');

    const request =
      new HttpRequest(
        'GET',
        '/test'
      );

    const next:
      HttpHandlerFn = () =>

      throwError(
        () =>
          new HttpErrorResponse({

            status: 401,

            statusText:
            'Unauthorized'

          })
      );

    errorInterceptor(
      request,
      next
    ).subscribe({

      error: () => {

        expect(window.alert)
          .toHaveBeenCalled();

        done();

      }

    });

  });

  // ✅ Success Request

  it('should pass successful request', (done) => {

    const request =
      new HttpRequest(
        'GET',
        '/test'
      );

    const next:
      HttpHandlerFn = () =>

      of({} as any);

    errorInterceptor(
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