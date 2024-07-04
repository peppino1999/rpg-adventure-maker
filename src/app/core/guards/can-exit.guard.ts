
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivateFn } from '@angular/router';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { firstValueFrom } from 'rxjs';

export interface CanDeactivateComponent {
  canDeactivate: () => boolean,
  dialogTitle: string,
  dialogContent:string
}

export const canExitGuard: CanDeactivateFn <CanDeactivateComponent> =  (component) => {
  const dialog = inject(MatDialog)

  const data = {
    title: component.dialogTitle,
    content: component.dialogContent
  }
  if(component.canDeactivate()){
    return Promise.resolve(true)
  } else{
    // apro la modale
    const dialogRef = dialog.open(ConfirmComponent, {
      data
    })
    // quando chiudo la modale
    return firstValueFrom(dialogRef.afterClosed()).then( (result: any) => result || false)
  }
  
};
