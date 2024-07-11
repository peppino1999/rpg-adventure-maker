import { Component, inject } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { EssentialComponent } from './core/components/essentialComponent';
import { LOGGEDOUT_ROOT } from './core/configs/tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends EssentialComponent {
  title = 'adventure-maker';
  authService = inject(AuthService)
  loggedOutRoute = inject(LOGGEDOUT_ROOT)
  
  async handleLogout(){
    await this.authService.logout()
    this.router.navigate([this.loggedOutRoute])
  }

}
