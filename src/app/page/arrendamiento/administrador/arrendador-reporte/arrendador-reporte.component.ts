import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Arrendador } from 'src/app/model/Arrendador';
import { ListaArrendadoresService } from 'src/app/service/lista-arrendadores.service';

@Component({
  selector: 'app-arrendador-reporte',
  templateUrl: './arrendador-reporte.component.html',
  styleUrls: ['./arrendador-reporte.component.css']
})
export class ArrendadorReporteComponent implements OnInit {

  dataSource: MatTableDataSource<Arrendador> = new MatTableDataSource();
  displayedColumns:string[]= ['idArrendador', 'nombre','celular','correo_electronico','password','direccion','propiedad','pais','identificacion', 'metodoPago', 'tipo']

  constructor( private esService: ListaArrendadoresService) { }

  ngOnInit(): void {
    this.esService.reporteCelularArrendador().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }

}
