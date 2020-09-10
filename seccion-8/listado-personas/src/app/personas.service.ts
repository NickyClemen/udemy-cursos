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

  public encontrarPersona(index:number) {
    let persona: Persona = this.personas[index];
    return persona;
  }

  public modificarPersona(index:number, persona:Persona) {
    let personaUno = this.personas[index];
    personaUno.nombre = persona.nombre;
    personaUno.apellido = persona.apellido;
  }

  public eliminarPersona(index) {
    this.personas.splice(index, 1);
  }

}
