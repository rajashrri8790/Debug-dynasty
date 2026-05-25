import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';

import {
  catchError
} from 'rxjs/operators';

import {
  throwError
} from 'rxjs';

export const errorInterceptor:
HttpInterceptorFn = (req, next) => {

  return next(req).pipe(

    catchError(

      (error: HttpErrorResponse) => {

        let errorMessage =
          'Something went wrong';

        // 400

        if (error.status === 400) {

          errorMessage =
            'Bad Request';

        }

        // 401

        else if (error.status === 401) {

          errorMessage =
            'Unauthorized Access';

        }

        // 403

        else if (error.status === 403) {

          errorMessage =
            'Access Denied';

        }

        // 404

        else if (error.status === 404) {

          errorMessage =
            'Resource Not Found';

        }

        // 500

        else if (error.status === 500) {

          errorMessage =
            'Internal Server Error';

        }

        // Show Error

        alert(errorMessage);

        return throwError(
          () => error
        );

      }

    )

  );

};