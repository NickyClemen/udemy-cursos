import { Component } from '@angular/core';

/* Un componente es una clase de Typescript.
Para crear un componente de Angular, hay que crear un decorator, que es una función
que le agrega características a la clase.
Una aplicación de Angular se puede componer de diferentes módulos, los cuáles pueden tener
diferentes componentes.

Crear un componente utilizando CLI
  ng generate component [file-name]
  ng g c [file-name]
Cuandos se utiliza CLI, el componente se agrega automáticamente al app.module.ts

Instalación de Bootstrap
Primero se instalan jQuery y Popper (son librerías que utiliza Bootstrap:
  npm install jquery --save
  npm install pooper.js --save
  npm install bootstrap --save

  Después de edita el archivo angular.json:
    "styles": [
      "src/styles.css",
      "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    "scripts": [
      "node_modules/jquery/dist/jquery.slim.min.js",
      "node_modules/popper.js/dist/umd/popper.min.js",
      node_modules/bootstrap/dist/js/bootstrap.min.js"
    ] */

@Component({
  selector: 'app-personas', // Nombre del elemento HTML. Se recomienda que comence con app.
  templateUrl: 'personas.component.html', /* Ruta relativa en la que está el archivo HTML
  del componente. El componente se tiene que registrar en el app.module.ts. */
  // template: // <h1>Lista de personas.</h1>
  // <app-persona></app-persona>,
  /* Componente en línea. Cuando se tiene un template muy compacto que no justifique un archivo aparte,
  se puede utilizar la propiedad 'template', y pegar el código (se puede tener el código HTML
  directamente en el componente).
  Se puede hacer hacer lo mismo con el CSS/HTML:
    ng generate c [file-name] --inline-style --inline template
    ng g c [file-name] -s -t */
  styleUrls: [

    './personas.component.css'

  ],
  /* styles: [

    /* `h1 {

      color: #00ff00;

     }`

  ] CSS en línea.
  No se puede usar inline-template con templateUrl. */

})

export class PeopleComponent {

  agregarPersona = false;
  agregarPersonaStatus = 'No se ha agregado ninguna persona';
  tituloPersona = 'Programadora';
  personaCreada = false;

  constructor() {

    setTimeout(() => {

      this.agregarPersona = true;

    }, 3000); // Property binding: Asociar elementos del HTML con propiedades de la clase.

  }

  onCrearPersona() {

    this.personaCreada = true;
    this.agregarPersonaStatus = 'Persona agregada';

  } /* Event binding: El 'on' es una buena práctica para que se sepa que se está enviando
  eventos dentro de un componente. */

  onModificarPersona(event:Event) {

    this.tituloPersona = (<HTMLInputElement>event.target).value;
    // El target es el elemento que se está ejecutando.

  }

}
