import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Pais } from 'src/app/model/Pais';
import { PaisService } from 'src/app/service/pais.service';
import { PdialogoComponent } from './pdialogo/pdialogo.component';


@Component({
  selector: 'app-pais-listar',
  templateUrl: './pais-listar.component.html',
  styleUrls: ['./pais-listar.component.css']
})
export class PaisListarComponent implements OnInit {

  lista:Pais[]=[];
  dataSource: MatTableDataSource<Pais>=new MatTableDataSource();
  displayedColumns:string[]=['idPais', 'pais','region', 'acciones'];
  private idMayor: number = 0;

  constructor(private _paisService: PaisService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this._paisService.listar().subscribe(data=>{
      this.lista=data;
      this.dataSource= new MatTableDataSource(data);
    });

    this._paisService.getLista().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });

    this._paisService.getConfirmaEliminacion().subscribe(data=>{
      data==true ? this.eliminar(this.idMayor):false;
    });

  }

  confirmar(id:number){
    this.idMayor=id;
    this.dialog.open(PdialogoComponent);
  }

  eliminar(id:number){
    this._paisService.eliminar(id).subscribe(()=>{
      this._paisService.listar().subscribe(data=>{
        this._paisService.setLista(data);
      });
    });
  }

  filtrar(e:any){
    this.dataSource.filter=e.target.value.trim();
  }

}
