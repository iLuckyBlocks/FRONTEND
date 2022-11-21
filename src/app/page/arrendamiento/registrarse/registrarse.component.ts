import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { ListaArrendadoresService } from 'src/app/service/lista-arrendadores.service';
import { Identificacion } from 'src/app/model/Identificacion';
import { TipodeIdentificacionService } from 'src/app/service/TipodeIdentificacion.service';
import { Arrendador } from 'src/app/model/Arrendador';
import { Pais } from 'src/app/model/Pais';
import { PaisService } from 'src/app/service/pais.service';
import { MetodoPago } from 'src/app/model/MetodoPago';
import { MetodoPagoService } from 'src/app/service/metodo-pago.service';
import { TipoUsuario } from 'src/app/model/tipoUsuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {


  arrendador: Arrendador= new Arrendador();
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
    private _arrendadorService:ListaArrendadoresService,
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

  addUsuario(){
      if(this.arrendador.nombre.length>0 && this.idPaisSeleccionado>0 && this.idIdentificacionSeleccionada>0 && this.idMetodoSeleccionado>0 && this.idUsuarioSeleccionado>0){

        let a= new Pais();
        a.idPais=this.idPaisSeleccionado;
        this.arrendador.pais=a;

        let p= new Identificacion();
        p.idIdentificacion=this.idIdentificacionSeleccionada;
        this.arrendador.identificacion=p;

        let d= new MetodoPago();
        d.idMetodoPago=this.idMetodoSeleccionado;
        this.arrendador.metodoPago=d;

        let e= new TipoUsuario();
        e.idTipoUser=this.idUsuarioSeleccionado;
        this.arrendador.tipo=e;

        if(this.edicion){
          this._arrendadorService.modificar(this.arrendador).subscribe(()=>{
            this._arrendadorService.listar().subscribe(data=>{
              this._arrendadorService.setLista(data);
            });
          });

        }else{
          this._arrendadorService.insertar(this.arrendador).subscribe(()=>{
            this._arrendadorService.listar().subscribe(data=>{
              this._arrendadorService.setLista(data);
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
      this._arrendadorService.listarId(this.id).subscribe(data=>{
        this.arrendador= data
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
