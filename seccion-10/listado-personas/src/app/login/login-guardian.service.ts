/* Evita que se pueda acceder a sitios. */
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuardian implements CanActivate {
  constructor(private loginService: LoginService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.loginService.isAutenticado()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
  // Permite saber si se tiene que mostrar una página o no.
} // Hay que implementar CanActivate.
