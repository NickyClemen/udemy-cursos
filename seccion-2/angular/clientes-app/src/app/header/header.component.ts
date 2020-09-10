import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  public logout(): void {
    let userName = this.authService.usuario.username;

    this.authService.logout();
    Swal.fire('Cerrar sesión', `${ userName }, has cerrado sesión con éxito`, 'success');
    this.route.navigate['/login'];
  }
}
