import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { pipe, takeUntil } from 'rxjs';
import { EssentialComponent } from '../../../core/components/essentialComponent';
import { LOGGEDIN_ROOT } from '../../../core/configs/tokens';
import { AuthService } from '../../../core/services/auth.service';
import { LoginInfo } from '../../../core/models/auth';
import { signInConfig } from '../../../core/configs/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninComponent extends EssentialComponent implements OnInit {
  signInFormConfig = signInConfig;
  loginRoute = inject(LOGGEDIN_ROOT);
  authService = inject(AuthService);

  ngOnInit() {
    // gestiamo il caso in cui l'utente è già loggato
  }
  signIn(loginInfo: LoginInfo) {
    // effettuiamo il login
    this.takeUntilDestroy(this.authService.login(loginInfo)).subscribe({
      next: () => this.router.navigate([this.loginRoute]),
    });
  }
}
