import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Arrendador } from 'src/app/model/Arrendador';
import { ListaArrendadoresService } from 'src/app/service/lista-arrendadores.service';

@Component({
  selector: 'app-arrendador-extranjero',
  templateUrl: './arrendador-extranjero.component.html',
  styleUrls: ['./arrendador-extranjero.component.css']
})
export class ArrendadorExtranjeroComponent implements OnInit {

  dataSource: MatTableDataSource<Arrendador> = new MatTableDataSource();
  displayedColumns:string[]= ['idArrendador', 'nombre','celular','correo_electronico','password','direccion','propiedad','pais','identificacion', 'metodoPago', 'tipo']

  constructor( private esService: ListaArrendadoresService) { }

  ngOnInit(): void {
    this.esService.reporteArrendadoresExtranjeros().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }

}
