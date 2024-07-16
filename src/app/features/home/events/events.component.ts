import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
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
export class EventsComponent extends EssentialComponent implements OnInit{
 
  authService = inject(AuthService);
  eventsService = inject(EventsService);
  userTypes = UserTypes;
  currentUserTypes = this.authService.currentUser.type;
  formConfig = EventForm;
  events$ = this.eventsService.events$;

 ngOnInit() {
   this.eventsService.getEvents();
  }

  handleCreation(event: Partial<GameEvent>) {
    this.eventsService.createEvent(event)
  }
}
