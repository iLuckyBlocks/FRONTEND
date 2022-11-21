import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {EMPTY, Subject} from 'rxjs';
import { Estudiante } from '../model/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class ListaEstudiantesService {

  private url: string = `${environment.host}/Estudiante`
  private listaCambio= new Subject<Estudiante[]>()
  private confirmaEliminacion= new Subject<Boolean>()

  constructor(private http:HttpClient) { }

 
  listar(){
    return this.http.get<Estudiante[]>(this.url);
  }

  insertar(estudiante: Estudiante){
    return this.http.post(this.url, estudiante);
  } 

  modificar(estudiante: Estudiante){
      return this.http.put(this.url, estudiante);
  }

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  buscar(texto: string){
    console.log("algo")
    if (texto.length != 0) {
      return this.http.post<Estudiante[]>(`${this.url}/buscarcelular`, texto.toLowerCase());
    }
    return EMPTY;
  }
  
  reporte(){return this.http.get<Estudiante[]>(`${this.url}/buscardominio`);}

  reporteExtranjeros(){
    return this.http.get<Estudiante[]>(`${this.url}/buscardominioPais`);}

  reportePagos(){
    return this.http.get<Estudiante[]>(`${this.url}/buscardominioPagos`);}


  listarId(id:number){
    return this.http.get<Estudiante>(`${this.url}/${id}`);
  }

  getLista(){
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Estudiante[]){
    this.listaCambio.next(listaNueva);
  }

  getConfirmacionEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean){
    this.confirmaEliminacion.next(estado);
  }

}
