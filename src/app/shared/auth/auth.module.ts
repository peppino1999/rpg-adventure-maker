import { NgModule } from '@angular/core';
import { SECURE_URL_CODE, LOGGEDIN_ROOT } from '../../core/tokens';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';

@NgModule({
  providers: [
    {
      provide: SECURE_URL_CODE,
      useValue: '660',
    },
    {
      provide: LOGGEDIN_ROOT,
      useValue: '/users',
    },
    provideHttpClient(
        withInterceptors([
            authInterceptor
        ])
    )
  ],
})
export class AuthModule {}
