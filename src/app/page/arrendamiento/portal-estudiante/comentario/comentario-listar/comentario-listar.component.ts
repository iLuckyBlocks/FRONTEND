import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Comentario } from 'src/app/model/Comentario';
import { ComentarioService } from 'src/app/service/comentario.service';
import { ComdialogoComponent } from './comdialogo/comdialogo.component';

@Component({
  selector: 'app-comentario-listar',
  templateUrl: './comentario-listar.component.html',
  styleUrls: ['./comentario-listar.component.css']
})
export class ComentarioListarComponent implements OnInit {

  lista: Comentario[] = [];
  dataSource: MatTableDataSource<Comentario> = new MatTableDataSource();
  displayedColumns: string[] = ['idComentario', 'comentario', 'arrendador','acciones'];
  private idMayor: number = 0;
  constructor(private comentarioService: ComentarioService,
    private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.comentarioService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);

    });
    this.comentarioService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.comentarioService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ComdialogoComponent);
  }
  eliminar(id: number) {
    this.comentarioService.eliminar(id).subscribe(() => {
      this.comentarioService.listar().subscribe(data => {
        this.comentarioService.setLista(data);
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
