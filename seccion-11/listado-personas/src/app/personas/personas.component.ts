import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Persona } from "../persona.model";

import { PersonasService } from "../personas.service";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  public personas: Persona[] = [];

  constructor(private personasService: PersonasService,
              private router: Router) {}

  ngOnInit():void {
    this.personasService.obtenerPersona().subscribe(
      (personas: Persona[] = []) => {
        this.personas = personas;
        this.personasService.setPersonas(personas);
      }
    );
    /* this.personas = this.personasService.personas;
    Es un pasaje por referencia, por lo que la información que se encuentra en el service,
    es la que se está inicializando en el array. */

  } /* Éste método se ejecuta después del constructor. */

  agregar() {
    this.router.navigate(['personas/agregar']); // Para redireccionar a una URL.
  }
}
