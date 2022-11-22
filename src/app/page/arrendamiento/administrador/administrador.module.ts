import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AllmoduleModule } from '../../allmodule/allmodule.module';
import { AdministradorComponent } from '../administrador/administrador.component';
import { ListaArrendadoresComponent } from './lista-arrendadores/lista-arrendadores.component';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { IdentificacionListarComponent } from './Identificacion/identificacion-listar/identificacion-listar.component';
import { IdentificacionEditarComponent } from './Identificacion/identificacion-editar/identificacion-editar.component';
import { DialogoComponent } from './Identificacion/identificacion-listar/dialogo/dialogo.component';
import { DialogoArrComponent } from './lista-arrendadores/dialogo-arr/dialogo-arr.component';
import { PaisComponent } from './pais/pais.component';
import { PaisEditarComponent } from './pais/pais-editar/pais-editar.component';
import { PaisListarComponent } from './pais/pais-listar/pais-listar.component';
import { PdialogoComponent } from './pais/pais-listar/pdialogo/pdialogo.component';
import { PagosComponent } from './pagos/pagos.component';
import { PagosEditarComponent } from './pagos/pagos-editar/pagos-editar.component';
import { PagosListarComponent } from './pagos/pagos-listar/pagos-listar.component';
import { MDialogoComponent } from './pagos/pagos-listar/mdialogo/mdialogo.component';
import { TusuarioComponent } from './tusuario/tusuario.component';
import { TusuarioListarComponent } from './Tusuario/tusuario-listar/tusuario-listar.component';
import { TusuarioEditarComponent } from './Tusuario/tusuario-editar/tusuario-editar.component';
import { DialogoEsComponent } from './lista-estudiantes/dialogo-es/dialogo-es.component';
import { AdministradorReportesComponent } from './administrador-reportes/administrador-reportes.component';
import { BuscarEstudianteComponent } from './lista-estudiantes/buscar-estudiante/buscar-estudiante.component';
import { ReporteEstudiantesComponent } from './reporte-estudiantes/reporte-estudiantes.component';
import { ReporteExtranjerosComponent } from './reporte-extranjeros/reporte-extranjeros.component';
import { ReportedeContratosComponent } from './reportede-contratos/reportede-contratos.component';
import { ReportepagosEstudianteComponent } from './reportepagos-estudiante/reportepagos-estudiante.component';
import { ReporteComentarioComponent } from './reporte-comentario/reporte-comentario.component';
import { ArrendadorReporteComponent } from './arrendador-reporte/arrendador-reporte.component';
import { ArrendadorExtranjeroComponent } from './arrendador-extranjero/arrendador-extranjero.component';
import { ArrendadorTarjetaComponent } from './arrendador-tarjeta/arrendador-tarjeta.component';
import { DescripcionAlojamientoComponent } from './descripcion-alojamiento/descripcion-alojamiento.component';
import { ReportetituloAlojamientoComponent } from './reportetitulo-alojamiento/reportetitulo-alojamiento.component';
import { ReporteprecioAlojamientoComponent } from './reporteprecio-alojamiento/reporteprecio-alojamiento.component';



@NgModule({
  declarations: [
    AdministradorComponent,
    ListaArrendadoresComponent,
    ListaEstudiantesComponent,
    NavbarComponent,
    IdentificacionComponent,
    IdentificacionListarComponent,
    IdentificacionEditarComponent,
    DialogoComponent,
    DialogoArrComponent,
    PaisComponent,
    PaisEditarComponent,
    PaisListarComponent,
    PdialogoComponent,
    PagosComponent,
    PagosEditarComponent,
    PagosListarComponent,
    MDialogoComponent,
    TusuarioComponent,
    TusuarioListarComponent,
    TusuarioEditarComponent,
    DialogoEsComponent,
    AdministradorReportesComponent,
    BuscarEstudianteComponent,
    ReporteEstudiantesComponent,
    ReporteExtranjerosComponent,
    ReportedeContratosComponent,
    ReportepagosEstudianteComponent,
    ReporteComentarioComponent,
    ArrendadorReporteComponent,
    ArrendadorExtranjeroComponent,
    ArrendadorTarjetaComponent,
    DescripcionAlojamientoComponent,
    ReportetituloAlojamientoComponent,
    ReporteprecioAlojamientoComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    AllmoduleModule
  ]
})
export class AdministradorModule { }
