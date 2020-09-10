import { Component, Output } from '@angular/core';

import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Lista de personas';
  personas: Persona[] = [new Persona('Cirilla', 'Rusch'), new Persona('Nicole', 'Ordoqui')];

  public onPersonaAgregada(persona: Persona) {

    this.personas.push(persona);

  }

}
