import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Anuncio } from 'src/app/model/Anuncio';
import { AlojamientoService } from 'src/app/service/alojamiento.service';

@Component({
  selector: 'app-reporteprecio-alojamiento',
  templateUrl: './reporteprecio-alojamiento.component.html',
  styleUrls: ['./reporteprecio-alojamiento.component.css']
})
export class ReporteprecioAlojamientoComponent implements OnInit {

  dataSource: MatTableDataSource<Anuncio> = new MatTableDataSource();
  displayedColumns:string[]= ['idAnuncio', 'imagen','titulo','precio','descripcion','distrito','direccion']

  constructor( private esService: AlojamientoService) { }

  ngOnInit(): void {
    this.esService.reporteTitulo().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }

}
