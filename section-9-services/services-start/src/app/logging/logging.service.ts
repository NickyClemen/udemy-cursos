export class LoggingService {

  public logStatusChange(status:string) {

    console.log('A server status changed, new status: ' + status);

  }

}

/* ¿Qué es un service?
Es una clase más en la aplicación, dónde se puede almacenar o centralizar el código.
Los servicios son clases comunes de Typescript.
IMPORTANTE: No crear instancias de servicios manualmente.
Ayuda a no tener código duplicado.

¿Qué es una dependency injector?
Una dependencia es una clase que depende una clase padre.
Una dependency injector, lo que hace es inyectar una instancia de la clase en el componente
automáticamente.

Hierarchical injector: Crea una instancia del servicio para un componente y todos sus componentes hijos.

  AppModule: La instancia está disponible para toda la aplicación (componentes, directivas, servicios).
  AppComponent: La instancia está disponible para todos los componentes (salvo para los servicios).
  No hay herencia para arriba, sino hacía abajo (de padre a hijo).
  Any other component: La instancia del servicio está disponible para un componente, y sus componentes
  hijos (herencia a más bajo nivel).

Para hacer una injection en un service, hay que vrear la instancia en AppModule. */
