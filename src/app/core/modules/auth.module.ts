import { NgModule } from '@angular/core';
import { SECURE_URL_CODE, LOGGEDIN_ROOT, LOGGEDOUT_ROOT } from '../../core/configs/tokens';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '../../core/interceptors/auth.interceptor';

@NgModule({
  providers: [
    {
      provide: SECURE_URL_CODE,
      useValue: '660',
    },
    {
      provide: LOGGEDIN_ROOT,
      useValue: '/',
    },
    {
      provide: LOGGEDOUT_ROOT,
      useValue: '/auth'
    },
    provideHttpClient(
        withInterceptors([
            authInterceptor
        ])
    )
  ],
})
export class AuthModule {}
