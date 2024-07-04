import { Component, inject } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { EssentialComponent } from './core/components/essentialComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends EssentialComponent {
  title = 'adventure-maker';
  authService = inject(AuthService)

  async handleLogout(){
    await this.authService.logout()
    this.router.navigate(['/'])
  }

}
