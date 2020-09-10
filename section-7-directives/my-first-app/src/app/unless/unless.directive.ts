import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition:boolean) {
   // Tiene que tener el mismo nombre que el selector.

    if (!condition) {

      this.vcRef.createEmbeddedView(this.templateRef);
      /* Crea elementos dentro del elemento. */

    } else {

      this.vcRef.clear();
      /* Limpia la pantalla. */

    }

  }
  /* Es un método que se ejeucta cuando la propiedad cambia. */

  constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef) { }
  /* Se vaa inyectar elementos al template con la directiva.
  TemplateRef es un generic.
  La directiva necesota dos parámetros:
    1) El elemento a inyectar.
    2) El componente dónde se va a renderizar. */

}
