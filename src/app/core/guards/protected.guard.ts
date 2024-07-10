import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LOGGEDIN_ROOT } from '../configs/tokens';

export const protectedGuard: CanActivateFn = () => {
  return inject(AuthService).isLoggedIn 
    ? true
    : inject(Router).navigate(['/'])
};

export const unprotectedGuard: CanActivateFn = () => {
  
  return inject(AuthService).isLoggedIn 
    ? inject(Router).navigate([inject(LOGGEDIN_ROOT)])
    : true
};

