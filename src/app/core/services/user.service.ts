import { inject, Injectable } from '@angular/core';
import { EssentialService } from './essentialService';
import { HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { User, UserTypes } from '../models/users';
import { map, Observable, tap } from 'rxjs';
import { generateQueryParams } from '../utils/url.utils';

@Injectable({
  providedIn: 'root',
})
export class UserService extends EssentialService {
  authService = inject(AuthService);

  constructor() {
    super();
    this.apiPath = `users`;
  }

  usersByPartyAndType(): Observable<User[]> {
  
    return this.apiCall<User[]>({
      type: 'GET',
      url: `${this.apiUrl}`,
      // solo per scopo di dialogo con il json-server
      options: {
        params: generateQueryParams(
          {
            partyId: this.authService.partyId || '',
            type: UserTypes.PLAYER
          }
        )
      },
    });
  }

  getUserById(): Observable<User> {
    return this.excludePasswordFromData(
      this.apiCall<User>({
        type: 'GET',
        url: `${this.apiUrl}/${this.authService.currentUser.id}`,
      })
    );
  }

  updateUser(body: Partial<User>): Observable<User> {
    return this.excludePasswordFromData(
      this.apiCall<User>({
        type: 'PATCH',
        url: `${this.apiUrl}/${this.authService.currentUser.id}`,
        options: {
          body,
        },
      }).pipe(
        tap(() => {
          this.snackbar.open('Utente aggiornato con successo', 'chiudi', {
            duration: 2000,
          });
        })
      )
    );
  }

  private excludePasswordFromData(
    obs: Observable<User>
  ): Observable<Omit<User, 'password'>> {
    return obs.pipe(
      map((res) => {
        const { password, ...rest } = res;
        return rest;
      })
    );
  }
}
