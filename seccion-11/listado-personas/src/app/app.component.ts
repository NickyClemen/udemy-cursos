import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; // No existe por default.

import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

/* Producción:
  ng build --prod --aot
Prepara lso achivos para producción, y crea una carpeta dist para distribuir la app.
Comando pensado para insertar en el root del server.
Si se quiere guardar en una carpeta:
  ng build --prod --aot --base-href /[file-name]/
Para hacer deploy en Firebase:
  npm install -g firebase-tools
  firebase login - Logueo.
  firebase init - Inicia el proyecto.
  firebase deploy: Subit el proyecto.
  firebase open hosting:site: Abrir proyecto. */

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

