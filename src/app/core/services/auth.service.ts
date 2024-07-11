import { Injectable, inject } from '@angular/core';
import { EssentialService } from './essentialService';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { LoginInfo } from '../models/auth';
import { User, UserAuthRes } from '../models/users';
import { StorageClient } from '../utils/storage.utils';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends EssentialService {
  storage =  new StorageClient(sessionStorage)

  constructor() {
    super();
    // this.apiPath = `users`;
  }

  get currentUser() {
    return JSON.parse(this.storage.get('user') || '{}');
  }

  get isLoggedIn() {
    return !!this.storage.get('token');
  }

  get token(){
    return this.storage.get('token')
  }

  get partyId(){
    return this.storage.get('partyId')
  }

  login(data: LoginInfo) {
    return this.apiCall<UserAuthRes>({
      type: 'POST',
      url: `${this.apiUrl}/signin`,
      options: {
        body: data,
        headers: new HttpHeaders({
          "SkipAuth" : "true"
        })
      },
    }).pipe(
      tap((res: UserAuthRes) => {
        this.storage.set('token', res.accessToken);
        this.storage.set('partyId', res.user.partyId || '')
        this.storage.set('user', JSON.stringify(res.user))
      })
    );
  }

  signup(data: User) {
    return this.apiCall({
      type: 'POST',
      url: `${this.apiUrl}/signup`,
      options: {
        body: data,
      },
    });
  }

  async logout() {
    this.storage.clear();
    await this.delay(100)
  }

  private delay(ms:number){
    return new Promise(resolve => setTimeout(resolve, ms))
  }


}
