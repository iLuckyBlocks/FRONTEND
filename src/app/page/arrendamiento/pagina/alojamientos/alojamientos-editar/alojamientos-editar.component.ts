import { Component, Inject,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Alojamiento } from 'src/app/interfaces/alojamiento';
import { Anuncio } from 'src/app/model/Anuncio';
import { AlojamientoService } from 'src/app/service/alojamiento.service';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PortalInjector } from '@angular/cdk/portal';
import { Arrendador } from 'src/app/model/Arrendador';
import { ListaArrendadoresService } from 'src/app/service/lista-arrendadores.service';

@Component({
  selector: 'app-alojamientos-editar',
  templateUrl: './alojamientos-editar.component.html',
  styleUrls: ['./alojamientos-editar.component.css']
})
export class AlojamientosEditarComponent implements OnInit {

  anuncio: Anuncio = new Anuncio();
  id: number = 0;
  edicion: boolean = false;
  mensaje: string = "";
  constructor(private anuncioService: AlojamientoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });



  }
  aceptar() {
    if (this.anuncio.titulo.length>0) {
      if (this.edicion) {
        this.anuncioService.modificacion(this.anuncio).subscribe(() => {
          this.anuncioService.listar().subscribe(data => {
            this.anuncioService.setLista(data);
          });
        });

      } else {

        this.anuncioService.insertar(this.anuncio).subscribe(() => {
          this.anuncioService.listar().subscribe(data => {
            this.anuncioService.setLista(data);
          });
        });
      }
      this.router.navigate(['/pagina/alojamientos']);
    } 
  }
  init() {
    if (this.edicion) {
      this.anuncioService.listarId(this.id).subscribe(data => {
        this.anuncio = data
        console.log(data);
      });

    }

  }

}
