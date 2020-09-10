import {Component, EventEmitter, OnInit, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName:string, serverContent:string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName:string, serverContent:string }>();
  /* Se crean propiedades en el componente para enlazar con los métodos de otra clase.
  Se igualan a new EventListener (es un generic, por lo que hay que especificar el tipo de dato que se
  va a emitir). Es importante agregar los () para ejecutar el constructor y crear una nueva instancia del
  objeto que se almanena en 'serverCreated'.
  @Output es el decorator para habilitar las propiedades para exportarlas.
  Se puede setear un alias para el uso del evento en otros componentes. */
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: false }) serverContentInput:ElementRef;
  /* ViewChild() no funciona solo; necesida dos argumentos:
    1) El elemento que se quiere seleccionar (no acepta selectores de CSS).
    2) El segundo parámetro depende de si se quiere accesar al elemento con ngInit():
      a) static: true para sí.
      b) static: false para no.
    El tipo de dato corresponde a ElementRef (hay que importarlo). */

  constructor() { }

  ngOnInit() {
  } /* Es un lifecycle hook, y Angular soporta varios.
  Cuando un nuevo componente es creado (instanciado), para por diferencias fases,
  por lo que se puede utilizar un hook para manipular y ejecutar código en ellas.
    1) ngOnChages: Es ejecutado múltiples veces. Es ejecutado cuando un nuevo componente es creado,
    pero siempre es llamado cuando los input properties cambian (los que vienen con el decorator
    @Input() cuando reciben nuevos valores).
    2) ngOnInit: Es llamado cuando el componente es inicializado. No se ve; no es agregado
    al DOM, pero toma la configuración inicial del método. Se ejecuta después del contructor.
    3) ngDoCheck: Es llamado durante cualquier cambio detectado. Angular detecta cuando
    algo cambia en el componente o en template. Es ejecutado cada vez que la aplicación necesita
    volver a renderizarse.
    4) ngAfterContentInit: Es llamado cuando un contenido es proyectado (ng-content).
    Se llama cuando un elemento es inicializado con ng-content.
    5) ngAfterContentChecked: Es llamado cada vez que es actualizado un contenido proyectado
    (ng-content).
    6) ngAfterViewInit: Es llamado después de que una vista de compoennte (o las vistas hijas),
    son inicializadas. Se llama después de que el componente es renderizado.
    7) ngAfterViewChecked: Es llamado cada vez que la vista se actualiza.
    8) ngOnDestroy: Es llamado cuando el componente es eliminado. */

  onAddServer(nameInput:HTMLInputElement) {

    // Para poder leer las propiedades del elemento, se lo iguala a HTMLInputElement.
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
    /* emit() permite activar el evento. */

  }

  onAddBlueprint(nameInput:HTMLInputElement) {

    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });

  }

}
