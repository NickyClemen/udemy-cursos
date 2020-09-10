import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';

import { LoggingService } from 'src/LoggingService.service';
import { PersonasService } from '../../personas.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  // providers: [LoggingService],
})
export class FormularioComponent implements OnInit {

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
  public index:number;
  public modoEdicion:number;

  constructor(private loggingService:LoggingService,
              private personasService:PersonasService,
              private router: Router, // Redireccionar.
              private route: ActivatedRoute // Para leer el parámetro que está recibiendo.
  ) {

    this.personasService.saludar.subscribe(

      (indice:number) => alert(`El index es ${ indice }.`)

    );

  }
  // Con DI, Angular crea automáticamente la instancia del service.

  ngOnInit(){
    this.index = this.route.snapshot.params['id']; // Recupera un parámetro.
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion']; // Recupera el queryParams.
    /* if(this.index) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    } */
    if(this.modoEdicion != null && this.modoEdicion === 1) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona() {
    let personaUno = new Persona(this.nombreInput, this.apellidoInput);
    // let personaUno = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    /* Se utiliza el nativeElement.value para acceder al valor del elemento. *
    Se utiliza le this para acceder al elemento HTML. */
    // this.loggingService.enviaMensajeConsola(`Enviamos persona ${ personaUno.nombre } ${ personaUno.apellido }`);
    // this.personaCreada.emit(personaUno); // Emitir un objeto.
    /* if(this.index) {
      this.personasService.modificarPersona(this.index, personaUno);
    } else {
      this.personasService.agregarPersona(personaUno);
    } */
    if(this.modoEdicion != null && this.modoEdicion === 1) {
      this.personasService.modificarPersona(this.index, personaUno);
    } else {
      this.personasService.agregarPersona(personaUno);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona() {
    if(this.index != null) {
      this.personasService.eliminarPersona(this.index);
      this.router.navigate(['personas']);
    }
  }

  /* onAgregarPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement) {

    let personaUno = new Persona(nombreInput.value, apellidoInput.value);
    // Se utiliza el value para acceder al valor del elemento.
    this.personaCreada.emit(personaUno); // Emitir un objeto.

  } */

}
