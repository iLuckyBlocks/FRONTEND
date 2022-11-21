import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ListaArrendadores } from 'src/app/interfaces/listaArrendamiento';
import { ListaEstudiantes } from 'src/app/interfaces/listaEstudiantes';
import { ListaArrendadoresService } from 'src/app/service/lista-arrendadores.service';
import { ListaEstudiantesService } from 'src/app/service/lista-estudiantes.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Estudiante } from 'src/app/model/Estudiante';
import { TipodeIdentificacionService } from 'src/app/service/TipodeIdentificacion.service';
import { PaisService } from 'src/app/service/pais.service';
import { MetodoPagoService } from 'src/app/service/metodo-pago.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Identificacion } from 'src/app/model/Identificacion';
import { Pais } from 'src/app/model/Pais';
import { MetodoPago } from 'src/app/model/MetodoPago';
import { TipoUsuario } from 'src/app/model/tipoUsuario';

@Component({
  selector: 'app-registra-estudiante',
  templateUrl: './registra-estudiante.component.html',
  styleUrls: ['./registra-estudiante.component.css']
})
export class RegistraEstudianteComponent implements OnInit {

  estudiante: Estudiante= new Estudiante();
  id:number=0;
  edicion:boolean= false;


  listaIdentificaciones: Identificacion[]=[];
  idIdentificacionSeleccionada:number=0;

  listaPaises: Pais[]=[];
  idPaisSeleccionado: number=0;

  listaMetodos: MetodoPago[]=[];
  idMetodoSeleccionado: number=0;

  listaUsuarios: TipoUsuario[]=[];
  idUsuarioSeleccionado: number=0;

  constructor( 
    private _estudianteService:ListaEstudiantesService,
    private route:  ActivatedRoute, 
    private router: Router,
    private _identificacion: TipodeIdentificacionService,
    private _paisService: PaisService,
    private _metodoService: MetodoPagoService,
    private _usuarioService: UsuarioService ) { }

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this._identificacion.listar().subscribe(data=>{this.listaIdentificaciones=data});
    this._paisService.listar().subscribe(data=>{this.listaPaises=data});
    this._metodoService.listar().subscribe(data=>{this.listaMetodos=data});
    this._usuarioService.listar().subscribe(data=>{this.listaUsuarios=data});
  }

  agregar(){
      if(this.estudiante.nombre.length>0 && this.idPaisSeleccionado>0 && this.idIdentificacionSeleccionada>0 && this.idMetodoSeleccionado>0 && this.idUsuarioSeleccionado>0){

        let a= new Pais();
        a.idPais=this.idPaisSeleccionado;
        this.estudiante.pais=a;

        let p= new Identificacion();
        p.idIdentificacion=this.idIdentificacionSeleccionada;
        this.estudiante.identificacion=p;

        let d= new MetodoPago();
        d.idMetodoPago=this.idMetodoSeleccionado;
        this.estudiante.metodoPago=d;

        let e= new TipoUsuario();
        e.idTipoUser=this.idUsuarioSeleccionado;
        this.estudiante.tipo=e;

        if(this.edicion){
          this._estudianteService.modificar(this.estudiante).subscribe(()=>{
            this._estudianteService.listar().subscribe(data=>{
              this._estudianteService.setLista(data);
            });
          });

        }else{
          this._estudianteService.insertar(this.estudiante).subscribe(()=>{
            this._estudianteService.listar().subscribe(data=>{
              this._estudianteService.setLista(data);
            });
          }, err=>{
            console.log('err');
          });
        }
        alert('Su cuenta fue creada con exito');
        this.router.navigate(['/login']);
      }
  }

  init(){
    if(this.edicion){
      this._estudianteService.listarId(this.id).subscribe(data=>{
        this.estudiante= data
        console.log(data);
        this.idIdentificacionSeleccionada= data.identificacion.idIdentificacion;
        this.idPaisSeleccionado= data.pais.idPais;
        this.idMetodoSeleccionado=data.metodoPago.idMetodoPago;
        this.idUsuarioSeleccionado=data.tipo.idTipoUser;
      });
    }
  }

  cerrar(){
    this.router.navigate(['/login']);
  }

}
