import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivateFn } from '@angular/router';
import { SignupConfirmDialog } from '../../features/auth/signup/signup.component';

export interface CanDeactivateComponent {
  canDeactivate: () => boolean
}

export const canExitGuard: CanDeactivateFn <CanDeactivateComponent> =  (component) => {


  const canDeactivate = component.canDeactivate()
  return canDeactivate
  
};
