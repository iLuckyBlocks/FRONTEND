import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlojamientoService } from 'src/app/service/alojamiento.service';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.css']
})
export class AlojamientosComponent implements OnInit {


  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }


}
