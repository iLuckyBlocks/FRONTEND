import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alojamiento } from '../interfaces/alojamiento';
import { Anuncio } from '../model/Anuncio';
import { EMPTY, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {

  constructor(private http:HttpClient) {}

  private url: string=`${environment.host}/anuncios`;
  private listaCambio= new Subject<Anuncio[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  
  postProduct(data: Anuncio){
    return this.http.post<Anuncio>(this.url, data);
  }

  getAlojamiento(){
    return this.http.get<any>(this.url);
  }

  putAlojamiento(data:Anuncio , id:number){
    return this.http.put<Anuncio>(this.url+id,data)
  }

  deleteAlojamiento(id:number){
      return this.http.delete<Anuncio>(this.url+id);
  }


  //nuevo 

  listar(){
    return this.http.get<Anuncio[]>(this.url);
  }

  insertar(anuncio: Anuncio){
      return this.http.post(this.url, anuncio);
  }

  modificacion(anuncio: Anuncio){
    return this.http.put(this.url, anuncio);
  }

  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  
  listarId(id: number) {
    return this.http.get<Anuncio>(`${this.url}/${id}`);
  }
  
  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Anuncio[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

  reporteDescripcion(){
    return this.http.get<Anuncio[]>(`${this.url}/buscardominioDescripcion`);}


  reporteTitulo(){
     return this.http.get<Anuncio[]>(`${this.url}/buscardominioTitulo`);}

  
  reportePrecio(){
    return this.http.get<Anuncio[]>(`${this.url}/buscardominioPrecio`);
  }

}
