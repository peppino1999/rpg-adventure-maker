import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token;
  const clonedRequest = req.headers.get('SkipAuth')
    ? req
    : req.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`,
        }),
      });

  return next(clonedRequest);
};
