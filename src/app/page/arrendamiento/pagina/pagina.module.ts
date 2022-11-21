import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaRoutingModule } from './pagina-routing.module';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { PaginaComponent } from './pagina.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AllmoduleModule } from '../../allmodule/allmodule.module';
import { AlojamientosListarComponent } from './alojamientos/alojamientos-listar/alojamientos-listar.component';
import { AlojamientosEditarComponent } from './alojamientos/alojamientos-editar/alojamientos-editar.component';
import { MidialogComponent } from './alojamientos/alojamientos-listar/midialog/midialog.component';

@NgModule({
  declarations: [
    PaginaComponent,
    InicioComponent,
    NavbarComponent,
    AlojamientosComponent,
    AlojamientosListarComponent,
    AlojamientosEditarComponent,
    MidialogComponent
  ],
  imports: [
    CommonModule,
    PaginaRoutingModule,
    HttpClientModule,

    AllmoduleModule
  ]
})
export class PaginaModule { }
