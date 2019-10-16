import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';

import { TAREAS } from '../mock-tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  tareas = TAREAS;
  selectedTarea: Tarea;
  clickMessage = 'mensaje inicio';

  constructor() { }

  ngOnInit() {
  }

  onEditar(tarea: Tarea): void {
     this.selectedTarea = tarea;
    //this.clickMessage = 'You are my hero!';
  }

}
