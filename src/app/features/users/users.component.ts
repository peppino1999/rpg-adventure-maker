import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EssentialComponent } from '../../core/components/essentialComponent';

@Component({
  selector: 'app-users',
  template: `
  <router-outlet/>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent extends EssentialComponent{
 
}
