import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-tdialogo',
  templateUrl: './tdialogo.component.html',
  styleUrls: ['./tdialogo.component.css']
})
export class TDialogoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private dialogRef:MatDialogRef<TDialogoComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.usuarioService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }


}
