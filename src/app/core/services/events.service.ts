import { inject, Injectable } from '@angular/core';
import { EssentialService } from './essentialService';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { GameEvent } from '../models/events';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService extends EssentialService{
  authService = inject(AuthService)
  private eventsSubject = new BehaviorSubject<GameEvent[]>([])

  get events$(): Observable<GameEvent[]> {
    return this.eventsSubject.asObservable();
  }

  constructor() {
    super();
    this.apiPath = 'events'
  }

  createEvent(body: Partial<GameEvent>): void{
  const partyId = this.authService.partyId
  const today = new Date()

  const data = {
    ...body,
    partyId,
    creationDate: today.getTime()
  }

  this.apiCall<GameEvent>(
    {
      type: 'POST',
      url: this.apiUrl,
      options:{
        body: data
      }
    }
  ).subscribe((res)=>{
    if(res){
      this.getEvents()
        this.snackbar.open('Evento Creato con successo', 'chiudi',
          {
            duration: 2000
          }
        )
    }
      }
    )
  }

  getEvents(): void{
     this.apiCall<GameEvent[]>({
      type: 'GET',
      url: this.apiUrl,
      options:{
       params: new HttpParams()
       .set('partyId', this.authService.currentUser.partyId)
       .set('_sort', 'creationDate')
       .set('_order', 'desc')
      }
    }).subscribe({
      next: (res) =>{
        this.eventsSubject.next(res)
      }
    })
  }
}
