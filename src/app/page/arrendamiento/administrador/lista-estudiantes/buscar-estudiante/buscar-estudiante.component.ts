import { Component, OnInit } from '@angular/core';
import { ListaEstudiantesService } from 'src/app/service/lista-estudiantes.service';

@Component({
  selector: 'app-buscar-estudiante',
  templateUrl: './buscar-estudiante.component.html',
  styleUrls: ['./buscar-estudiante.component.css']
})
export class BuscarEstudianteComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private estudianteService: ListaEstudiantesService) { }

  ngOnInit(): void {
  }

  buscar(e:any){
    this.estudianteService.buscar(e.target.value).subscribe(data=>{
      this.estudianteService.setLista(data);
    })
  }

}
