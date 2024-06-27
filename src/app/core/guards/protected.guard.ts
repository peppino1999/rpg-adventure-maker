import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const protectedGuard: CanActivateFn = (route, state) => {

  return inject(AuthService).isLoggedIn 
    ? true
    : inject(Router).navigate(['/'])
};
