import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { API_URL } from '../configs/tokens';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiCallParams } from '../models/api-client';

@Injectable()
export class EssentialService {
  // dependencies
  private http = inject(HttpClient);
  protected apiBase = inject(API_URL);
  protected snackbar = inject(MatSnackBar);

  // variabili configurabili
  protected apiPath = '';
  get apiUrl(): string {
    return `${this.apiBase}${this.apiPath.length ? '/' + this.apiPath : ''}`;
  }

  // metodo che permette di chiamare gli endpoint api
  protected apiCall<T>(
    params: ApiCallParams,
    errorMessage: string | null = null
  ): Observable<T> {
    return this.http.request<T>(params.type, params.url, params.options).pipe(
      catchError((err) => {
        this.snackbar.open(errorMessage ? errorMessage : err.message, 'chiudi', {
          duration: 2000,
          verticalPosition: 'top',
        });
        return throwError(() => new Error(err));
      })
    );
  }
}
