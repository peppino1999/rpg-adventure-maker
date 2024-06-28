import { Observable } from 'rxjs';
import { EssentialService } from '../../core/services/essentialService';
import { Injectable, inject } from '@angular/core';
import { User } from '../../core/models';
import { SECURE_URL_CODE } from '../../core/tokens';
@Injectable({
  providedIn: 'root',
})
export class UsersService extends EssentialService {


  secureUrl = inject(SECURE_URL_CODE)
  constructor() {
    super();
    this.apiPath = `${this.secureUrl}/users`;
  }

  getUsers(): Observable<User[]> {
    return this.apiCall<User[]>({
      type: 'GET',
      url: this.apiUrl,
    });
  }

  getUser(id: number): Observable<User> {
    return this.apiCall<User>({
      type: 'GET',
      url: `${this.apiUrl}/${id}`,
    }, 'utente non trovato');
  }

  addUser(user: User): Observable<User> {
    return this.apiCall<User>({
      type: 'POST',
      url: this.apiUrl,
      options: {
        body: user,
      },
    });
  }

  updateUser(user: Partial<User>): Observable<User> {
    return this.apiCall<User>({
      type: 'PUT',
      url: `${this.apiUrl}/${user.id}`,
      options: {
        body: user,
      },
    });
  }

  deleteUser(user: User): Observable<User> {
    return this.apiCall<User>({
      type: 'DELETE',
      url: `${this.apiUrl}/${user.id}`,
    });
  }
}
