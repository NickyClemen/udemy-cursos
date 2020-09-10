import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  public nombrePersona:string = 'Cirilla';
  public apellidoPersona:string = 'Rusch';
  public edad:number = 1;

  /* public getAge():number {

    return this.edad;

  } */

} /* En la interpolación, se pueden acceder no sólo a propiedades, sino a métodos. */
