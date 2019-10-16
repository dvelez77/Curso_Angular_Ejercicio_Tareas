import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';

import { TAREAS } from '../mock-tarea';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  tareas: Tarea[];
  selectedTarea: Tarea;

  constructor(private tareaService: TareaService) { }

  ngOnInit() {
    this.getTareas();
  }

  onEditar(tarea: Tarea): void {
     this.selectedTarea = tarea;
  }

  getTareas(): void {
    this.tareas = this.tareaService.getTareas();
  }

}
