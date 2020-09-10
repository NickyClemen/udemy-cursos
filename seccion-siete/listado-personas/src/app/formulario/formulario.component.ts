import { Component, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';

import { LoggingService } from 'src/LoggingService.service';
import { PersonasService } from './../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  // providers: [LoggingService],
})
export class FormularioComponent {

  // @Output() personaCreada = new EventEmitter<Persona>();
  /* Event binding.
  @Output: Decorador para recibir información de otro component.
  Luego, se establece una propiedad que es el evento que se va a asociar cuando se esté eminiento
  el evento.
  new EventEmitter es de tipo generic, por lo que hay que establecer qué tipo de dato es. */
  // @ViewChild('nombreInput', { static: false }) nombreInput:ElementRef;
  // @ViewChild('apellidoInput', { static: false }) apellidoInput:ElementRef;
  /* Se va a usar para acceder a las local reference del componente.
  Se le agrega un nombre a la variable, y deja de ser de tipo HTMLInputElement, y pasa a ser un
  ElementRef.
  Se acceden a las local reference desde la clase. */

  public nombreInput:string;
  public apellidoInput:string;

  constructor(private loggingService:LoggingService, private personasService:PersonasService) {

    this.personasService.saludar.subscribe(

      (indice:number) => alert(`El index es ${ indice }.`)

    );

  }
  // Con DI, Angular crea automáticamente la instancia del service.

  public onAgregarPersona() {

    // let personaUno = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    let personaUno = new Persona(this.nombreInput, this.apellidoInput);
    /* Se utiliza el nativeElement.value para acceder al valor del elemento. *
    Se utiliza le this para acceder al elemento HTML. */
    // this.loggingService.enviaMensajeConsola(`Enviamos persona ${ personaUno.nombre } ${ personaUno.apellido }`);
    // this.personaCreada.emit(personaUno); // Emitir un objeto.
    this.personasService.agregarPersona(personaUno);

  }

  /* onAgregarPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement) {

    let personaUno = new Persona(nombreInput.value, apellidoInput.value);
    // Se utiliza el value para acceder al valor del elemento.
    this.personaCreada.emit(personaUno); // Emitir un objeto.

  } */

}
