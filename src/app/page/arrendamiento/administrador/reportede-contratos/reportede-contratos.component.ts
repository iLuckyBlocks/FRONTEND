import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Arrendador } from 'src/app/model/Arrendador';
import { Contrato } from 'src/app/model/Contrato';
import { ListaArrendadoresService } from 'src/app/service/lista-arrendadores.service';

@Component({
  selector: 'app-reportede-contratos',
  templateUrl: './reportede-contratos.component.html',
  styleUrls: ['./reportede-contratos.component.css']
})
export class ReportedeContratosComponent implements OnInit {

  dataSource: MatTableDataSource<Arrendador> = new MatTableDataSource();
  displayedColumns:string[]= ['idArrendador', 'nombre','celular','correo_electronico','direccion','propiedad','idContrato','detallesContrato','monto','arrendador']

  constructor( private arrService: ListaArrendadoresService) { }

  ngOnInit(): void {
    this.arrService.reporteContratos().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }
}
