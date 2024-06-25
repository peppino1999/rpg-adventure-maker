import { Component, inject } from '@angular/core';
import { EssentialComponent } from '../../core/essentialComponent';

@Component({
  selector: 'app-users',
  template: `
  <!-- @if(utente loggato){ -->
    <button (click)="logout()">Logout</button>
  <!-- } -->
  <router-outlet/>
  `
})
export class UsersComponent extends EssentialComponent{
 

  async logout(){
    // await this.authServce.logout()
    this.router.navigate(['../'])
  }
}
