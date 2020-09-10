import { LoggingService } from 'src/LoggingService.service';

import { Persona } from './persona.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService {

  personas: Persona[] = [

    new Persona('Cirilla', 'Rusch'),
    new Persona('Nicole', 'Ordoqui')

  ];

  saludar = new EventEmitter<number>();

  // Inyectar un servicio en otro.
  constructor(private logginService:LoggingService) {}
  /* Para inyectar un servicio, se utiliza el decoracor @Injectable(). */
  public agregarPersona(persona: Persona) {

    this.logginService.enviaMensajeConsola(`Se agregó a ${ persona.nombre }.`);
    this.personas.push(persona);

  }

}
