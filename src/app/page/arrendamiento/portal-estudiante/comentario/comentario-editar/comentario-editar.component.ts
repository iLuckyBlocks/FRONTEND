import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Arrendador } from 'src/app/model/Arrendador';
import { Comentario } from 'src/app/model/Comentario';
import { AlojamientoService } from 'src/app/service/alojamiento.service';
import { ArrendamientoService } from 'src/app/service/arrendamiento.service';
import { ComentarioService } from 'src/app/service/comentario.service';
import { ListaArrendadoresService } from 'src/app/service/lista-arrendadores.service';

@Component({
  selector: 'app-comentario-editar',
  templateUrl: './comentario-editar.component.html',
  styleUrls: ['./comentario-editar.component.css']
})
export class ComentarioEditarComponent implements OnInit {

  comentario: Comentario = new Comentario();
  id: number = 0;
  edicion: boolean = false;
  listaArrendadores: Arrendador[]=[];
  idArrendadorSeleccionado: number=0;

  constructor(private comentarioService: ComentarioService,
    private route: ActivatedRoute,
    private router: Router, private arrendadorService: ListaArrendadoresService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
      this.arrendadorService.listar().subscribe(data=>{this.listaArrendadores=data});

  }
  aceptar() {
    if (this.comentario.comentario.length>0 && this.idArrendadorSeleccionado>0) {

      let p= new Arrendador();
      p.idArrendador=this.idArrendadorSeleccionado;
      this.comentario.arrendador=p;

      if (this.edicion) {
        this.comentarioService.modificacion(this.comentario).subscribe(() => {
          this.comentarioService.listar().subscribe(data => {
            this.comentarioService.setLista(data);
          });
        });

      } else {

        this.comentarioService.insertar(this.comentario).subscribe(() => {
          this.comentarioService.listar().subscribe(data => {
            this.comentarioService.setLista(data);
          });
        });
      }
      this.router.navigate(['/portal-estudiante/comentario']);
    } 
  }
  init() {
    if (this.edicion) {
      this.comentarioService.listarId(this.id).subscribe(data => {
        this.comentario = data
        console.log(data);
        this.idArrendadorSeleccionado=data.arrendador.idArrendador;
      });

    }

  }
}
