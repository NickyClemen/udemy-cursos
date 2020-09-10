import {

  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild

} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.Emulated,
}) /* View encapsulation
Dentro del decorator, hay una property que se llama 'encapsulation', y se utiliza como value
ViewEncapsulation.
Tiene tres valores:
  1) Emulated: Valor por default. Emula el shadow DOM.
  2) None: No está usando view encapsulation. Se aplican los estilos globales. Los selectores
  no pueden ser modificados por Angular.
  3) Native: Usa la tecnología del shadow DOM. Es como 'emulated', pero se habilita solamente en
  los browser que soportan ésta característica. */
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') /* Se puede personalizar el uso del @Input() para limitar el uso/comportamiento
  del export de una propiedad.
  Se le pueden asignar alias a las propiedades. */
  public element: {

    type:string,
    name:string,
    content:string,

  }; /* Ésto no es un value; es la sintáxis para crear un type en Typescript.
  Éste elemento le pertenece a éste componente; no puede ser accesado desde afuera.
  Por efecto, las propiedades de los componentes solamente pueden ser accedidos por dentro,
  no desde afuera.
  Hay que especificar qué propiedades pueden estar disponibles desde afuera.
  Para definir que una propiedad es "exportable", hay que usar el decorator @Input. */
  @Input() name:string;
  @ViewChild('heading', { static: true }) header:ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph:ElementRef;
  /* Se utiliza para acceder al contenido (ng-content), ya que no forma parte de la vista. */

  constructor() {

    console.log('Constructor called!');

  }

  ngOnChanges(changes:SimpleChanges) {

    console.log('ngOnChanges called!');
    console.log(changes);

  } /* Se ejecuta en cualquier momento (antes del ngOnInit).
  Recibe un argumento (es el único hook que recibe parámetros). Recibe changes (cambios),
  y son de tipo SimpleChanges (un objeto con los elementos del componnete).
  Cuando la instancia del componente es creado, el primer cambio es la carga de los elementos
  y propiedades. */

  ngOnInit() {

    console.log('ngOnInit called!');
    console.log(this.header.nativeElement.textContent);
    console.log(this.paragraph.nativeElement.textContent);

  } /* Se ejecuta después del constructor. */

  ngDoCheck() {

    console.log('ngDoCheck called!');

  } /* Se ejecuta cada vez que detecta un cambio.
  Se utiliza mucho si se necesita hacer algín cmambio manualmente. */

  ngAfterContentInit() {

    console.log('ngAfterContentInit called!');
    console.log(this.paragraph.nativeElement.textContent);

  } /* Funciona cada vez que es inyectado contenido en el componente (ng-content). */

  ngAfterViewInit() {

    console.log('ngAfterViewInit called!');
    console.log(this.header.nativeElement.textContent);

  }

  ngAfterViewChecked() {

    console.log('ngAfterViewChecked called!');

  }

  ngAfterContentChecked() {

    console.log('ngAfterContentChecked called!');

  }

  ngOnDestroy() {

    console.log('ngOnDestroy called!');

  }

} /* Es buena práctica implementa el ngOnChanges junto con OnInit. */
