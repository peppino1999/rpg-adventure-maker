import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  get isLoggedIn(){
    return localStorage.getItem('auth')
  }

  login():void{
    localStorage.setItem('auth', 'true')
  }

  logout():void{
    localStorage.removeItem('auth')
  }
}
