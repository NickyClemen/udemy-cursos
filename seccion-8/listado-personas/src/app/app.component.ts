import { Component, OnInit } from '@angular/core';

import { Persona } from './persona.model';

import { LoggingService } from 'src/LoggingService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'Lista de personas';

  /* public onPersonaAgregada(persona: Persona) {

    this.loggingService.enviaMensajeConsola(`Agregamos a ${ persona.nombre }.`);
    this.personas.push(persona);

  } */

  /* public onPersonaAgregada(persona: Persona) {

    this.personasService.agregarPersona(persona);

  } */

}

