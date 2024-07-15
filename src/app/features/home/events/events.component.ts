import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserTypes } from '../../../core/models/users';
import { AuthService } from '../../../core/services/auth.service';
import { EventForm } from '../../../core/configs/events.config';
import { EventsService } from '../../../core/services/events.service';
import { EssentialComponent } from '../../../core/components/essentialComponent';
import { GameEvent } from '../../../core/models/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent extends EssentialComponent {
  authService = inject(AuthService);
  eventsService = inject(EventsService);
  userTypes = UserTypes;
  currentUserTypes = this.authService.currentUser.type;
  formConfig = EventForm;

  handleCreation(event: Partial<GameEvent>) {
    this.takeUntilDestroy(this.eventsService.createEvent(event)).subscribe();
  }
}
