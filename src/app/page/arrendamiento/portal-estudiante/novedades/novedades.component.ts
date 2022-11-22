import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AlojamientoService } from 'src/app/service/alojamiento.service';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  displayedColumns: string[] = ['idAnuncio', 'imagen', 'titulo', 'precio', 'descripcion','distrito', 'direccion'];
  dataSource!:MatTableDataSource<any>;

  constructor(private _AlojamientoService: AlojamientoService, private router:Router , private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.getAllAlojamientos();
  }

  //Paginacion
  @ViewChild(MatPaginator) paginator!:MatPaginator; //angular
  @ViewChild(MatSort) sort!:MatSort;

  ngAfterViewInit(){
    // this.dataSource.paginator=this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  getAllAlojamientos(){
    
    this._AlojamientoService.getAlojamiento()
    .subscribe({
      next:(res)=>{
          console.log("load");
          //aqui
          this.dataSource=new MatTableDataSource(res);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
      },
      error:(err)=>{
        alert("Ha ocurrido un error al cargar el alojameinto")
      }
    })
  }

}
