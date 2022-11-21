import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-administrador-reportes',
  templateUrl: './administrador-reportes.component.html',
  styleUrls: ['./administrador-reportes.component.css']
})
export class AdministradorReportesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  busquedaEstudiante(){
    this.router.navigate(['/administrador/estudiantereporte']);
  }

  estudiantesExtranjeros(){
    this.router.navigate(['/administrador/extranjeros']);
  }

  ContratosdeArrendadores(){
    this.router.navigate(['/administrador/contratosarrendador']);
  }
  
  MetodoPagoEstudiantes(){
    this.router.navigate(['/administrador/pagos']); 
  }

  ReportesSegunComentario(){
    this.router.navigate(['/administrador/reporteComentarios']);
  }


  busquedaArrendadores(){
    this.router.navigate(['/administrador/reporteArrendador']);
  }

  arrendadoresExtranjeros(){
    this.router.navigate(['/administrador/arrendadoresExtranjeros']);
  }

  arrendadorPagoTarjeta(){
    this.router.navigate(['/administrador/arrendadorPagoTarjeta'])
  }

  busquedaDescripcion(){
    this.router.navigate(['/administrador/descripcion'])
  }

  buscarTitulo(){
    this.router.navigate(['/administrador/titulo'])
  }
  
  buscarPrecio(){
    this.router.navigate(['/administrador/precio'])
  }

}
