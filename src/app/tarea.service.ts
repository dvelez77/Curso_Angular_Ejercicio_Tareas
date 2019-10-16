import { Injectable } from '@angular/core';

import { Tarea } from './tarea';
import { TAREAS } from './mock-tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor() { }

  getTareas(): Tarea[] {
    return TAREAS;
  }
}
