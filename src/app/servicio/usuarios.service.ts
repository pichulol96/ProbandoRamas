import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import {usuario} from '../interfaces/interfaz_usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url="https://reqres.in/api/";
  constructor(private http:HttpClient) { }
  ObtenerUsuariso(){
   return this.http.get<usuario>(this.url+"users?page=2");
  }
  Login(usuario:object){
    return this.http.post(this.url+"login",usuario);
  }
}
