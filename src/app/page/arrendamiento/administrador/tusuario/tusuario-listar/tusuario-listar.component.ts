import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TipoUsuario } from 'src/app/model/tipoUsuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { TDialogoComponent } from './tdialogo/tdialogo.component';

@Component({
  selector: 'app-tusuario-listar',
  templateUrl: './tusuario-listar.component.html',
  styleUrls: ['./tusuario-listar.component.css']
})
export class TusuarioListarComponent implements OnInit {

  lista:TipoUsuario[]=[];
  dataSource: MatTableDataSource<TipoUsuario>=new MatTableDataSource();
  displayedColumns:string[]=['idTipoUser', 'tipoUsuario', 'acciones'];
  private idMayor: number = 0;

  constructor(private usuarioService: UsuarioService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(data=>{
      this.lista=data;
      this.dataSource= new MatTableDataSource(data);
    });

    this.usuarioService.getLista().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });

    this.usuarioService.getConfirmaEliminacion().subscribe(data=>{
      data==true ? this.eliminar(this.idMayor):false;
    });

  }

  confirmar(id:number){
    this.idMayor=id;
    this.dialog.open(TDialogoComponent);
  }

  eliminar(id:number){
    this.usuarioService.eliminar(id).subscribe(()=>{
      this.usuarioService.listar().subscribe(data=>{
        this.usuarioService.setLista(data);
      });
    });
  }

  filtrar(e:any){
    this.dataSource.filter=e.target.value.trim();
  }

}
