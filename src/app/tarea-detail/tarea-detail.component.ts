import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../tarea';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tarea-detail',
  templateUrl: './tarea-detail.component.html',
  styleUrls: ['./tarea-detail.component.css']
})
export class TareaDetailComponent implements OnInit {
  @Input() tarea: Tarea;

  tarea1: Tarea = {
    id: 1,
    nombre: 'fdafdsa',
    descripcion: 'fafdsadsafdsa',
    terminado: 1
  };

  constructor(private location: Location) { }

  ngOnInit() {
    this.getTarea();
  }

  getTarea() {
    this.tarea = this.tarea1;

 
  }

  goBack(): void {
    this.location.back();
  }

}
