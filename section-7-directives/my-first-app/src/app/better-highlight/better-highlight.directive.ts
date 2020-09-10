import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor:string = 'transparent';
  @Input('appBetterHighlight') highlightColor:string = '#00ff';
  /* Custom property binding funciona en las directives.
  Se le puede proveer de un alias a la propiedad (en éste caso, se lo iguala al selector de la directiva). */

  @HostBinding('style.backgroundColor') backgroundColor:string;
  /* Un decorator para usar con events simples y sin rendering.
  Se coloca como nombre la property a modificar. Como parámetro, se le pasa un string de la property
  que se quiere bindear. Mejora el acceso al DOM.
  Se crea un nueva propiedad de Typescript. */

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit() {

    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#00ff);
    /* Para utilizar setStyle(), se necesita como primer argumento, el elemento.
    El segundo elemento, es la propiedad que se quiere modificar.
    El tercer argumento, es el valor que se quiere pasar.
    El cuarto argumento, es una flag del objeto (es opcional).

    renderer es la mejor aproximación para poder acceder a los native elements. */
    this.backgroundColor = this.defaultColor;

  }

  /* @HostListener('mouseenter') mouseover(eventData: Event) {

    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#00ff');
    this.backgroundColor = '#00ff';

  } */

  @HostListener('mouseenter') mouseover(eventData: Event) {

    this.backgroundColor = this.highlightColor;

  }
  /* Controla los eventos para que se ejecute la directive.
  El argumento de la directive es un string que detalle el event. */

  /* @HostListener('mouseleave') mouseleave(eventData: Event) {

    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';

  } */

  @HostListener('mouseleave') mouseleave(eventData: Event) {

    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;

  }

}
