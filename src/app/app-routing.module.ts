import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaComponent } from './tarea/tarea.component';
import { TareaDetailComponent } from './tarea-detail/tarea-detail.component';

const routes: Routes = [
  { path: 'tareas', component: TareaComponent },
  { path: 'detail/:id', component: TareaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }