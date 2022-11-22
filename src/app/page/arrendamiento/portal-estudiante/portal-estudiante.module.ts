import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalEstudianteRoutingModule } from './portal-estudiante-routing.module';
import { PortalEstudianteComponent } from './portal-estudiante.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { HttpClientModule } from '@angular/common/http';
import { AllmoduleModule } from '../../allmodule/allmodule.module';
import { ContratoComponent } from './contrato/contrato.component';
import { ContratoListarComponent } from './contrato/contrato-listar/contrato-listar.component';
import { ContratoEditarComponent } from './contrato/contrato-editar/contrato-editar.component';
import { DialogoalertComponent } from './contrato/contrato-listar/dialogoalert/dialogoalert.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { ComentarioListarComponent } from './comentario/comentario-listar/comentario-listar.component';
import { ComentarioEditarComponent } from './comentario/comentario-editar/comentario-editar.component';
import { ComdialogoComponent } from './comentario/comentario-listar/comdialogo/comdialogo.component';



@NgModule({
  declarations: [
    PortalEstudianteComponent,
      InicioComponent,
       NavbarComponent,
       NovedadesComponent,
       ContratoComponent,
       ContratoListarComponent,
       ContratoEditarComponent,
       DialogoalertComponent,
       ComentarioComponent,
       ComentarioListarComponent,
       ComentarioEditarComponent,
       ComdialogoComponent
  ],
  imports: [
    CommonModule,
    PortalEstudianteRoutingModule,
    HttpClientModule,
    AllmoduleModule
  ]
})
export class PortalEstudianteModule { }
