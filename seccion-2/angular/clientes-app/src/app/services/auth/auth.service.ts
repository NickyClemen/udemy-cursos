import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usuario: Usuario;
  private _token: string;

  constructor(private http: HttpClient) { }

  public get usuario(): Usuario {
    if(this._usuario != null) {
      return this._usuario;
    } else if(this._usuario == null && sessionStorage.getItem('usuario') != null) {
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this._usuario;
    }

    return new Usuario();
  }

  public get token(): string {
    if(this._token != null) {
      return this._token;
    } else if(this._usuario == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }

    return null;
  }

  public login(usuario: Usuario): Observable<any> {
    const URL_ENDPOINT = 'http://localhost:8080/oauth/token';
    const credentials = btoa('angularapp' + ':' + 'Ciren2020');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credentials,
    });

    let params = new URLSearchParams(); // Lo convierte en URLEncoder, por lo que toma cada parámetro y lo concatena a la URL.
    params.set('grant_type', 'password');
    params.set('username', usuario.username);
    params.set('password', usuario.password);

    return this.http.post<any>(URL_ENDPOINT, params.toString(), { headers: httpHeaders });
  }

  public logout(): void {
    this._token = null;
    this._usuario = null;

    sessionStorage.clear();
  }

  public guardarUsuario(accessToken: string): void {
    const payload = this._obtenerDatosPayload(accessToken);

    this._usuario = new Usuario();
    this._usuario.nombre = payload.nombre;
    this._usuario.apellido = payload.apellido;
    this._usuario.email = payload.email;
    this._usuario.username = payload.user_name;
    this._usuario.roles = payload.authorities;

    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
  }

  public guardarToken(accessToken: string): void {
    this._token = accessToken;

    sessionStorage.setItem('token', accessToken);
  }

  private _obtenerDatosPayload(accessToken: string): any {
    if(accessToken != null) {
      return JSON.parse(atob(accessToken.split('.')[1]));
    }

    return null;
  }

  public isAuthenticated(): boolean {
    const TOKEN = this.token;
    let payload = this._obtenerDatosPayload(TOKEN);

    if(payload != null && payload.user_name && payload.user_name.length > 0) {
      return true;
    }

    return false;
  }

  public hasRole(role: string): boolean {
    if(this.usuario.roles.includes(role)) {
      return true;
    }

    return false;
  }
}
