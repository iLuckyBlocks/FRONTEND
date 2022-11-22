import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Identificacion } from '../model/Identificacion';

@Injectable({
  providedIn: 'root'
})
export class TipodeIdentificacionService {

  private url: string = `${environment.host}/tiposdeidentificacion`
  private listaCambio= new Subject<Identificacion[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Identificacion[]>(this.url);
  }

  insertar(identificacion: Identificacion){
      return this.http.post(this.url, identificacion);
  }

  modificacion(identificacion: Identificacion){
    return this.http.put(this.url, identificacion);
  }

  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  
  listarId(id: number) {
    return this.http.get<Identificacion>(`${this.url}/${id}`);
  }
  
  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Identificacion[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

}
