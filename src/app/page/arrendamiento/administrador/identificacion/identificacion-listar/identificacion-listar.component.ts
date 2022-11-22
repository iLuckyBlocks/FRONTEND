import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Identificacion } from 'src/app/model/Identificacion';
import { TipodeIdentificacionService } from 'src/app/service/TipodeIdentificacion.service';
import { DialogoComponent } from './dialogo/dialogo.component';

@Component({
  selector: 'app-identificacion-listar',
  templateUrl: './identificacion-listar.component.html',
  styleUrls: ['./identificacion-listar.component.css']
})
export class IdentificacionListarComponent implements OnInit {

  lista:Identificacion[]=[];
  dataSource: MatTableDataSource<Identificacion>=new MatTableDataSource();
  displayedColumns:string[]=['idIdentificacion', 'tipoidentificacion', 'acciones'];
  private idMayor: number = 0;

  constructor(private identificacionService: TipodeIdentificacionService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.identificacionService.listar().subscribe(data=>{
      this.lista=data;
      this.dataSource= new MatTableDataSource(data);
    });

    this.identificacionService.getLista().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });

    this.identificacionService.getConfirmaEliminacion().subscribe(data=>{
      data==true ? this.eliminar(this.idMayor):false;
    });

  }

  confirmar(id:number){
    this.idMayor=id;
    this.dialog.open(DialogoComponent);
  }

  eliminar(id:number){
    this.identificacionService.eliminar(id).subscribe(()=>{
      this.identificacionService.listar().subscribe(data=>{
        this.identificacionService.setLista(data);
      });
    });
  }

  filtrar(e:any){
    this.dataSource.filter=e.target.value.trim();
  }
}
