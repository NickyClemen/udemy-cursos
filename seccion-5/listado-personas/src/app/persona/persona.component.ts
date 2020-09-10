import { Component, Input } from '@angular/core';

import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() persona:Persona;
  /* Pasar propiedades de un componente padre a uno hijo.
  Definir las variables para recibir la información. */
  @Input() indice:number;

  constructor() { }



}
