import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoUsuario } from '../model/tipoUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = `${environment.host}/tipoUsuario`
  private listaCambio= new Subject<TipoUsuario[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<TipoUsuario[]>(this.url);
  }

  insertar(tipousuario: TipoUsuario){
      return this.http.post(this.url, tipousuario);
  }

  modificacion(tipousuario: TipoUsuario){
    return this.http.put(this.url, tipousuario);
  }

  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  
  listarId(id: number) {
    return this.http.get<TipoUsuario>(`${this.url}/${id}`);
  }
  
  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: TipoUsuario[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
