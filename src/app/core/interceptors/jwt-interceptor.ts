import {
  HttpInterceptorFn
} from '@angular/common/http';

export const jwtInterceptor:
HttpInterceptorFn = (req, next) => {

  // Get Token

  const token =
    localStorage.getItem(
      'stayease_token'
    );

  // Clone Request With Token

  if (token) {

    req = req.clone({

      setHeaders: {

        Authorization:
        `Bearer ${token}`

      }

    });

  }

  // Continue Request

  return next(req);

};