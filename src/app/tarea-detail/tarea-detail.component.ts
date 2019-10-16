import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-tarea-detail',
  templateUrl: './tarea-detail.component.html',
  styleUrls: ['./tarea-detail.component.css']
})
export class TareaDetailComponent implements OnInit {
  @Input() tarea: Tarea;

  constructor() { }

  ngOnInit() {
  }

}
