import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistraEstudianteComponent } from './registra-estudiante.component';

const routes: Routes = [

  {path:'', component:RegistraEstudianteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistraEstudianteRoutingModule { }
