import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarseComponent } from '../registrarse/registrarse.component';
import { AdministradorReportesComponent } from './administrador-reportes/administrador-reportes.component';
import { AdministradorComponent } from './administrador.component';
import { ArrendadorExtranjeroComponent } from './arrendador-extranjero/arrendador-extranjero.component';
import { ArrendadorReporteComponent } from './arrendador-reporte/arrendador-reporte.component';
import { ArrendadorTarjetaComponent } from './arrendador-tarjeta/arrendador-tarjeta.component';
import { DescripcionAlojamientoComponent } from './descripcion-alojamiento/descripcion-alojamiento.component';
import { IdentificacionEditarComponent } from './Identificacion/identificacion-editar/identificacion-editar.component';
import { IdentificacionListarComponent } from './Identificacion/identificacion-listar/identificacion-listar.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { ListaArrendadoresComponent } from './lista-arrendadores/lista-arrendadores.component';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { PagosEditarComponent } from './pagos/pagos-editar/pagos-editar.component';
import { PagosComponent } from './pagos/pagos.component';
import { PaisEditarComponent } from './pais/pais-editar/pais-editar.component';
import { PaisComponent } from './pais/pais.component';
import { ReporteComentarioComponent } from './reporte-comentario/reporte-comentario.component';
import { ReporteEstudiantesComponent } from './reporte-estudiantes/reporte-estudiantes.component';
import { ReporteExtranjerosComponent } from './reporte-extranjeros/reporte-extranjeros.component';
import { ReportedeContratosComponent } from './reportede-contratos/reportede-contratos.component';
import { ReportepagosEstudianteComponent } from './reportepagos-estudiante/reportepagos-estudiante.component';
import { ReporteprecioAlojamientoComponent } from './reporteprecio-alojamiento/reporteprecio-alojamiento.component';
import { ReportetituloAlojamientoComponent } from './reportetitulo-alojamiento/reportetitulo-alojamiento.component';
import { TusuarioEditarComponent } from './Tusuario/tusuario-editar/tusuario-editar.component';
import { TusuarioComponent } from './tusuario/tusuario.component';

const routes: Routes = [ 
  { path:'',component:AdministradorComponent,children:[
    {path:'lista-estudiantes',component:ListaEstudiantesComponent},

    {path:'lista-arrendadores',component:ListaArrendadoresComponent, children:[
      {path:'nuevo', component:RegistrarseComponent},
      {path:'edicion/:id', component: RegistrarseComponent}
    ]},

    {path:'identificacion', component:IdentificacionComponent, children:[
      {path:'nuevo', component:IdentificacionEditarComponent},
      {path:'edicion/:id', component:IdentificacionEditarComponent}
    ]},

    {path:'pais', component: PaisComponent, children:[
      {path:'nuevo', component: PaisEditarComponent},
      {path:'edicion/:id', component:PaisEditarComponent}
    ]},

    {path:'metodo', component: PagosComponent, children:[
      {path:'nuevo', component: PagosEditarComponent},
      {path:'edicion/:id', component: PagosEditarComponent}
    ]},

    {path:'usuario', component: TusuarioComponent, children:[
      {path:'nuevo', component:TusuarioEditarComponent},
      {path:'edicion/:id', component: TusuarioEditarComponent}
    ]},

    {path:'reportes', component: AdministradorReportesComponent},
    {path:'estudiantereporte', component: ReporteEstudiantesComponent},
    {path:'extranjeros', component: ReporteExtranjerosComponent},
    {path:'contratosarrendador', component: ReportedeContratosComponent},
    {path:'pagos', component:ReportepagosEstudianteComponent},
    {path:'reporteComentarios', component:ReporteComentarioComponent},
    {path:'reporteArrendador', component:ArrendadorReporteComponent},
    {path:'arrendadoresExtranjeros', component:ArrendadorExtranjeroComponent},
    {path:'arrendadorPagoTarjeta', component:ArrendadorTarjetaComponent},
    {path:'descripcion', component: DescripcionAlojamientoComponent},
    {path:'titulo', component:ReportetituloAlojamientoComponent},
    {path:'precio', component:ReporteprecioAlojamientoComponent}
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
