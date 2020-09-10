import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; // No existe por default.

import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'Lista de personas';

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDV53GbZA4KI0TRVzQIvqQCMzdzJqZszrI',
      authDomain: 'listado-personas-36835.firebaseapp.com',
    }); /* Conexión con la base de datos. Recibe un objeto de JS. */
  }

  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  salir() {
    this.loginService.logout();
  }

}

