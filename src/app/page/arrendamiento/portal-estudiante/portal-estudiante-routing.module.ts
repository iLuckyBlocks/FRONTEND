import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortalEstudianteComponent } from './portal-estudiante.component';
import { InicioComponent } from './inicio/inicio.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { ContratoComponent } from './contrato/contrato.component';
import { ContratoEditarComponent } from './contrato/contrato-editar/contrato-editar.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { ComentarioEditarComponent } from './comentario/comentario-editar/comentario-editar.component';


const routes: Routes = [
    {path:'',component:PortalEstudianteComponent, children:[

      {path:'',component:InicioComponent},
      {path: 'novedades',component:NovedadesComponent},

      {path: 'contrato', component: ContratoComponent, children:[
        {path:'nuevo', component: ContratoEditarComponent},
        {path:'edicion/:id' , component: ContratoEditarComponent}
      ]},

      {path:'comentario', component: ComentarioComponent, children:[
        {path:'nuevo', component: ComentarioEditarComponent},
        {path:'edicion/:id', component: ComentarioEditarComponent}
      ]}

    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalEstudianteRoutingModule { }
