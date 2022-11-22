import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlojamientosEditarComponent } from './alojamientos/alojamientos-editar/alojamientos-editar.component';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaComponent } from './pagina.component';

const routes: Routes = [
{path:'',component:PaginaComponent, children:[

  {path:'',component:InicioComponent},
  {path: 'alojamientos',component:AlojamientosComponent,children:[
    {path:'nuevo', component: AlojamientosEditarComponent},
    {path:'edicion/:id', component: AlojamientosEditarComponent}
  ]}
   
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaRoutingModule { }
