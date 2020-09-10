import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({

  selector: '[appBasicHighlight]',
  /* Es muy importante para definir la directive.
  Se utiliza camelCase. Se lo pone entre [] para indicar que es un atributo. */

})
export class BasicHighLightDirective implements OnInit{

  constructor(private elementRef:ElementRef) {
  }
  /* Al constructor se le pasa una referencia del elemento en el que se va a inyectar
  la directive. */

  ngOnInit() {

    this.elementRef.nativeElement.style.backgroundColor = 'green';
    // Acceder al elemento directamente no es una buena práctica.

  }

}
/* No es un componente, es una directive custom.
@Directive() se le pasa un objeto de configuración.
Se agrega en las declaration de app.module.ts.

Para crear una directive por CLI:
  ng generate directive [file-name]
  ng g d [file-name] */
