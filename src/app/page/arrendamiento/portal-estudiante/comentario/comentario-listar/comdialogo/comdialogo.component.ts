import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ComentarioService } from 'src/app/service/comentario.service';

@Component({
  selector: 'app-comdialogo',
  templateUrl: './comdialogo.component.html',
  styleUrls: ['./comdialogo.component.css']
})
export class ComdialogoComponent implements OnInit {

  constructor(private comentarioService: ComentarioService,
    private dialogRef: MatDialogRef<ComdialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.comentarioService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
