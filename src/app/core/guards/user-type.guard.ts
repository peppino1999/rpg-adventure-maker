import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserTypes } from '../models/users';

function checkDifferentUrls(from:string,to:string,router:Router){
  if (!from.startsWith(to)) {
    router.navigate([to]);
    return false;
  }else{
    return true;
  }
  
}

export const userTypeGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const currentUser = authService.currentUser;

  switch (currentUser.type) {
    case UserTypes.MASTER:
      return checkDifferentUrls(state.url,'/master',router);
    case UserTypes.PLAYER:
     return checkDifferentUrls(state.url,'/player',router);
    default:
      router.navigate(['/']);
      return false;
  }
};
