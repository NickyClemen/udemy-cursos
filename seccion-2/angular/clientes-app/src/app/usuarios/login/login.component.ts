import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../models/usuario.model';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public titulo: string = 'Login';
  public usuario: Usuario;

  constructor(private authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      Swal.fire('Login', `Hola, ${ this.authService.usuario.username }, ya estás autenticado`, 'info');

      this.router.navigate(['/clientes']);
    }
  }

  public login(): void {
    console.log(this.usuario);

    if(this.usuario.username == null || this.usuario.password == null) {
      Swal.fire('Error al iniciar sesión', 'El usuario o contraseña están vacíos', 'error');

      return;
    }

    this.authService.login(this.usuario)
      .subscribe(response => {
        /*let payload = JSON.parse(atob(response.access_token.split('.')[1]));
        atob convierte convierte la respuesta en un JSON de string.*/
        this.authService.guardarUsuario(response.access_token);
        this.authService.guardarToken(response.access_token);

        let usuario = this.authService.usuario;

        this.router.navigate(['/clientes']);
        Swal.fire('Inicio de sesión', `Hola, ${ usuario.username }. Ha iniciado sesión con éxito`, 'success');
      }, reject => {
        if(reject.status === 400) {
          Swal.fire('Error en inicio de sesión', `El usuario o la contraseña son inválidos. Inténtelo de nuevo`, 'success');
        }
      });
  }
}
