import { inject, Injectable } from '@angular/core';
import { EssentialService } from './essentialService';
import { HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { User, UserTypes } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends EssentialService {

  authService = inject(AuthService)
  constructor() {
    super();
    this.apiPath = `users`;
  }

  usersByPartyAndType(): Observable<User[]> {
    return this.apiCall({
      type: 'GET',
      url: `${this.apiUrl}`,
      // solo per scopo di dialogo con il json-server
      options:{
        params: new HttpParams()
          .set('partyId', this.authService.partyId || '')
          .set('type', UserTypes.PLAYER)
      }
    });
  }
  
}
