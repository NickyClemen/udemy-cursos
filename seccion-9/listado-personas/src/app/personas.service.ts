import { LoggingService } from 'src/LoggingService.service';
import { DataServices } from "./data.services";

import { Persona } from './persona.model';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class PersonasService {

  personas: Persona[] = [];
   /* personas: Persona[] = [

    new Persona('Cirilla', 'Rusch'),
    new Persona('Nicole', 'Ordoqui')

  ]; */

  saludar = new EventEmitter<number>();

  // Inyectar un servicio en otro.
  constructor(private logginService:LoggingService,
              private dataServices: DataServices) {}
  /* Para inyectar un servicio, se utiliza el decoracor @Injectable(). */

  public setPersonas(personas: Persona[]) {
    this.personas = personas;
  }

  public obtenerPersona() {
    return this.dataServices.cargarPersonas();
  }

  public agregarPersona(persona: Persona) {
    this.logginService.enviaMensajeConsola(`Se agregó a ${ persona.nombre }.`);

    if(this.personas === null) {
      this.personas = [];
    }

    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas)
  }

  public encontrarPersona(index:number) {
    let persona: Persona = this.personas[index];
    return persona;
  }

  public modificarPersona(index:number, persona:Persona) {
    let personaUno = this.personas[index];
    personaUno.nombre = persona.nombre;
    personaUno.apellido = persona.apellido;
    this.dataServices.modificarPersona(index, persona);
  }

  public eliminarPersona(index) {
    this.personas.splice(index, 1);
    this.dataServices.eliminarPersona(index);
    this.modificarPersonas();
  }

  public modificarPersonas(){
    if(this.personas != null) {
      this.dataServices.guardarPersonas(this.personas);
    }
  }

}
