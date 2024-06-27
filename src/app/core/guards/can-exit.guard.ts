import { CanDeactivateFn } from '@angular/router';

export interface CanDeactivateComponent {
  canDeactivate: () => boolean
}

export const canExitGuard: CanDeactivateFn <CanDeactivateComponent> =  (component) => {

  const canDeactivate = component.canDeactivate()
  return canDeactivate
    ? true
    : window.confirm('Sei sicuro di voler abbandonare la pagina?')
};
