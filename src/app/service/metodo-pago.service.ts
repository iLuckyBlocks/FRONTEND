import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MetodoPago } from '../model/MetodoPago';

@Injectable({
  providedIn: 'root'
})
export class MetodoPagoService {

  private url: string = `${environment.host}/MetodoPago`
  private listaCambio= new Subject<MetodoPago[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  listar(){  return this.http.get<MetodoPago[]>(this.url); }

  insertar(_metodo: MetodoPago){  return this.http.post(this.url, _metodo); }

  modificacion(_metodo: MetodoPago){ return this.http.put(this.url, _metodo); }

  eliminar(id: number) { return this.http.delete(`${this.url}/${id}`); }
  
  listarId(id: number) {   return this.http.get<MetodoPago>(`${this.url}/${id}`); }
  
  getLista() {   return this.listaCambio.asObservable(); }

  setLista(listaNueva: MetodoPago[]) { this.listaCambio.next(listaNueva); }

  getConfirmaEliminacion() { return this.confirmaEliminacion.asObservable();}

  setConfirmaEliminacion(estado: Boolean) { this.confirmaEliminacion.next(estado); }

}
