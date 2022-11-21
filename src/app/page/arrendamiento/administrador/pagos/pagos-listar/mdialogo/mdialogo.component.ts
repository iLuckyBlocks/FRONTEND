import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MetodoPagoService } from 'src/app/service/metodo-pago.service';

@Component({
  selector: 'app-mdialogo',
  templateUrl: './mdialogo.component.html',
  styleUrls: ['./mdialogo.component.css']
})
export class MDialogoComponent implements OnInit {


  constructor(private _metodoService: MetodoPagoService, private dialogRef:MatDialogRef<MDialogoComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this._metodoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
