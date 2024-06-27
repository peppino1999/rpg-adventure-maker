import { Component, inject } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { EssentialComponent } from './core/essentialComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends EssentialComponent {
  title = 'crud-project';
  authService = inject(AuthService)

  handleLogout(){
    this.authService.logout()
    this.router.navigate(['/'])
  }



}
