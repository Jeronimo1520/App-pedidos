import { Injectable } from '@angular/core';
import { Usuario } from '../shared/models/Usuario';
import {BehaviorSubject, Observable, tap} from 'rxjs'
import { IUsuarioLogin } from '../shared/interfaces/IUsuarioLogin';
import { HttpClient } from '@angular/common/http';
import { USUARIO_LOGIN_URL, USUARIO_REGISTRO_URL } from '../shared/models/constants/urls';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';
import { IUsuarioRegistro } from '../shared/interfaces/IUsuarioRegistro';

const USUARIO_KEY = 'Usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>(this.getUsuarioFromLocalStorage());
  public usuarioObservable: Observable<Usuario>
  constructor(private http:HttpClient,
    private router: Router
   
  ){ 
    this.usuarioObservable = this.usuarioSubject.asObservable();
  }

  login(usuarioLogin: IUsuarioLogin):Observable<Usuario>{
    return this.http.post<Usuario>(USUARIO_LOGIN_URL,usuarioLogin).pipe(
      tap({
        next: (usuario) =>{
          this.setUsuarioToLocalStorage(usuario)
          this.usuarioSubject.next(usuario);
          alert(`Bienvenido ${usuario.nombre}`)
        },

        error: (errorResponse) =>{
          alert('Login ha fallado')
        }
      })
    );
  }

  logout(){
    this.usuarioSubject.next(new Usuario());
    localStorage.removeItem(USUARIO_KEY)
    this.router.navigateByUrl('/login');
  }

  registrar(registroUsuario:IUsuarioRegistro): Observable<Usuario>{
    return this.http.post<Usuario>(USUARIO_REGISTRO_URL,registroUsuario).pipe(
      tap({
        next: (usuario) =>{
          this.setUsuarioToLocalStorage(usuario);
          this.usuarioSubject.next(usuario);
          alert(`Bienvenido, disfruta de rappidito ${usuario.nombre},el registro fue exitoso`)
        },

        error: (errorResponse) => {
          alert('Registro ha fallado')
        }
      })
    )
  }

  //Guardar usuarios en local
  private setUsuarioToLocalStorage(usuario:Usuario){
    localStorage.setItem(USUARIO_KEY, JSON.stringify(usuario));
  }

  private getUsuarioFromLocalStorage():Usuario{
    const usuarioJson = localStorage.getItem(USUARIO_KEY); 
    if(usuarioJson)
    return JSON.parse(usuarioJson) as Usuario;
    return new Usuario();
  }
}
