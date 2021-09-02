import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

//entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
  //return this.http.post<UsuarioLogin>('https://blogannybe.herokuapp.com/usuarios/logar', usuarioLogin)
//}

gerAllTema(): Observable<Tema[]>{
  return this.http.get<Tema[]>('https://blogannybe.herokuapp.com/temas', this.token)
}

postTema(tema: Tema): Observable<Tema> {
  return this.http.post<Tema>('https://blogannybe.herokuapp.com/temas', tema, this.token)
}

}