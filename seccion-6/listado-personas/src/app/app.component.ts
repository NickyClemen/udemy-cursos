import { Component, OnInit } from '@angular/core';

import { Persona } from './persona.model';

import { LoggingService } from 'src/LoggingService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'Lista de personas';
  public personas: Persona[] = [];

  constructor(private loggingService:LoggingService, private personasService: PersonasService) {}

  ngOnInit():void {

    this.personas = this.personasService.personas;
    /* Es un pasaje por referencia, por lo que la información que se encuentra en el service,
    es la que se está inicializando en el array. */

  } /* Éste método se ejecuta después del constructor. */

  /* public onPersonaAgregada(persona: Persona) {

    this.loggingService.enviaMensajeConsola(`Agregamos a ${ persona.nombre }.`);
    this.personas.push(persona);

  } */

  /* public onPersonaAgregada(persona: Persona) {

    this.personasService.agregarPersona(persona);

  } */

}

