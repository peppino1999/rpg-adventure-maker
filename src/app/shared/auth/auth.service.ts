import { Injectable } from '@angular/core';
import { EssentialService } from '../../core/services/essentialService';
import { LoginInfo, User, UserAuthRes } from '../../core/models';
import { tap } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends EssentialService {
  constructor() {
    super();
    // this.apiPath = `users`;
  }

  get isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  get token(){
    return localStorage.getItem('token')
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
        localStorage.setItem('token', res.accessToken);
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
    localStorage.removeItem('token');
    await this.delay(100)
  }

  private delay(ms:number){
    return new Promise(resolve => setTimeout(resolve, ms))
  }


}
