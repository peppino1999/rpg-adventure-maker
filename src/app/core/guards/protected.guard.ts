import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';
import { LOGGEDIN_ROOT } from '../tokens';

export const protectedGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isLoggedIn 
    ? true
    : inject(Router).navigate(['/'])
};

export const unprotectedGuard: CanActivateFn = (route, state) => {
  
  return inject(AuthService).isLoggedIn 
    ? inject(Router).navigate([inject(LOGGEDIN_ROOT)])
    : true
};

