import { Injectable } from '@angular/core';
import { formatDate, DatePipe } from '@angular/common';
import localeES from '@angular/common/locales/es-AR';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';

import { Cliente } from '../models/cliente.model';
import { Region } from '../models/region.model';

import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private URL:string = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  private agregarAuthorizationHeader() {
    let token = this.authService.token;

    if(token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }

    return this.httpHeaders;
  }

  private isNotAuth(e): boolean {
    if(e.status === 401) {
      this.router.navigate(['/login']);
      return true;
    }

    if(e.status === 403) {
      Swal.fire('Acceso denegado', `Hola, ${ this.authService.usuario.username }, no tenés acceso a éste recurso`, 'warning');
      this.router.navigate(['/clientes']);
      return true;
    }

    return false;
  }

  public getRegiones(): Observable<Region[]> {
    return this.http.get<Region[]>(`${ this.URL }/regiones`, { headers: this.agregarAuthorizationHeader() })
      .pipe(
        catchError(e => {
          this.isNotAuth(e);
          return throwError(e);
        })
      );
  }

  public getClientes(page: number): Observable<any> {
    // return of(CLIENTES); of(): Convierte a un observable (strim: Flujo de datos).
    return this.http.get(`${ this.URL }/page/${ page }`)
      .pipe(
        tap((response: any) => {
          (response.content as Cliente[]).forEach(cliente => console.log(cliente.nombre));
        }), /* tap: Se utiliza para tomar valores, realizar tareas, sin tocar lso valores en sí mismo.
        No retorna nada; es de tipo void.
        Es importante el orden de las funciones dentro del pipe. */
        map((response: any) => {
          (response.content as Cliente[]).map(cliente => {
            cliente.nombre = cliente.nombre.toUpperCase();
            /* let datePipe = new DatePipe('es');

            cliente.createAt = datePipe.transform(cliente.createAt, ''); */
            /* EEE: Nombre de la semana abreviado.
            EEEE: Nombre completo.
            MMM: Nombre mes abreviado.
            MMMM: nombre completo.
            fullDate: Fecha completa. */
            /* Solución uno.
            cliente.createAt = formatDate(cliente.createAt, 'dd-MM-yyyy', 'en-US'); */
            return cliente;
        });
        return response;
      })
    );
    /* Con map se puede castear el tipo de dato que se recibe del observable (que es de tipo any).
      return this.http.get(this.URL).pipe(
        map(response => response as Cleinte[])
      ); */
  }

  public create(cliente: Cliente): Observable<Cliente> {
    /* Solución uno.
    return this.http.post<any>(this.URL, cliente, { headers: this.httpHeaders })
      .pipe(
        catchError(e => {
          console.error(e.error.mensaje);
          Swal.fire(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })
      ); */
    // Solución dos.
    return this.http.post(this.URL, cliente, { headers: this.agregarAuthorizationHeader() })
      .pipe(
        map((response: any) => response.cliente as Cliente),
        catchError(e => {
          if(this.isNotAuth(e)) {
            return throwError(e);
          }

          if(e.status === 400) {
            return throwError(e); // Captura el error del backend y lo procesa el componente.
          }

          console.error(e.error.mensaje);
          Swal.fire(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })
      );
  }

  public getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${ this.URL }/${ id }`, { headers: this.agregarAuthorizationHeader() })
      .pipe(
        catchError(e => {
          if(this.isNotAuth(e)) {
            return throwError(e);
          }

          // Captura los códigos de error.
          this.router.navigate(['/clientes']);
          console.error(e.error.mensaje);
          Swal.fire('Error al editar', e.error.mensaje, 'error');
          return throwError(e);
        })
      );
  }

  public update(cliente: Cliente): Observable<any> {
    // Solución uno.
    return this.http.put<any>(`${ this.URL }/${ cliente.id }`, cliente, { headers: this.agregarAuthorizationHeader() })
      .pipe(
        catchError(e => {
          if(this.isNotAuth(e)) {
            return throwError(e);
          }

          if(e.status === 400) {
            return throwError(e);
          }

          console.error(e.error.mensaje);
          Swal.fire('Error al editar el cliente', e.error.mensaje, 'error');
          return throwError(e);
        })
      );
  }

  public delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${ this.URL }/${ id }`, { headers: this.agregarAuthorizationHeader() })
      .pipe(
        catchError(e => {
          if(this.isNotAuth(e)) {
            return throwError(e);
          }

          console.error(e.error.mensaje);
          Swal.fire('Error al eliminar el cliente', e.error.mensaje, 'error');
          return throwError(e);
        })
      );
  }

  public subirFoto(archivo: File, id: any): Observable<HttpEvent<{}>> {
    const formData = new FormData();

    formData.append('archivo', archivo);
    formData.append('id', id);

    let httpHeaders = new HttpHeaders();
    let token = this.authService.token;

    if(token != null) {
      httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
    }

    const req = new HttpRequest('POST', `${ this.URL }/upload`, formData, {
      reportProgress: true,
      headers: httpHeaders
    });

    return this.http.request(req)
      .pipe(
        catchError(e => {
          this.isNotAuth(e);
          return throwError(e);
        })
      );
      /*.pipe(
        map((response: any) => response.cliente as Cliente),
        catchError(e => {
          console.error(e.error.mensaje);
          Swal.fire(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })
      );*/
  }
}
