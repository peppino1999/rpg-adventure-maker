import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { API_URL } from '../tokens';
import { ApiCallParams } from '../models';

@Injectable()
export class EssentialService {
  // dependencies
  private http = inject(HttpClient);
  protected apiBase = inject(API_URL);

  // variabili configurabili
  protected apiPath = '';
  get apiUrl(): string {
    return `${this.apiBase}${this.apiPath.length ? '/' + this.apiPath : ''}`;
  }

  // metodo che permette di chiamare gli endpoint api
  protected apiCall<T>(params: ApiCallParams): Observable<T> {
    return this.http.request<T>(params.type, params.url, params.options).pipe(
      catchError((err) => {
        return throwError(() => new Error(err))
      })
    );
  }
}
