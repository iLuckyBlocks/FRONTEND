import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlojamientoService } from 'src/app/service/alojamiento.service';

@Component({
  selector: 'app-midialog',
  templateUrl: './midialog.component.html',
  styleUrls: ['./midialog.component.css']
})
export class MidialogComponent implements OnInit {

  constructor(private alojamientoService: AlojamientoService,
    private dialogRef: MatDialogRef<MidialogComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.alojamientoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
