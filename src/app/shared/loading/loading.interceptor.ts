import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, catchError, finalize, map, throwError } from 'rxjs';
import { LoadingService } from '../../shared/loading/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const loadingService = inject(LoadingService);
  // aumento il conteggio di loading
  loadingService.loadingCount += 1;
  return next(req).pipe(
    catchError((_err) => {
      // se c'è un errore setto a 0 il loading
      loadingService.loadingCount = 0;
      throw _err;
    }),
    finalize(() => {
      // metto in sicurezza che il valore minimo sia sempre 0
      if (loadingService.loadingCount < 0) {
        loadingService.loadingCount = 0;
      } else {
        loadingService.loadingCount -= 1;
      }
    })
  );
};
