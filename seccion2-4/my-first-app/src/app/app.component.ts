import { Component } from '@angular/core';

/* Declaración del componente. Decorator. */
@Component({
  selector: 'app-root', // Nombre de la etiqueta del componente.
  templateUrl: './app.component.html', // Indica qué index HTML se va a utilizar.
  styleUrls: ['./app.component.css'] // Indica el archivo de estilos.
})
export class AppComponent {
  title = 'Hola mundo desde Angular';
}
