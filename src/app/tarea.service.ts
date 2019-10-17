import { Injectable } from '@angular/core';

import { Tarea } from './tarea';
import { TAREAS } from './mock-tarea';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private messageService: MessageService) { }

  getTareas(): Observable<Tarea[]> {
    this.messageService.add('TareaService: fetched tareas');
    return of(TAREAS);
  }
}
