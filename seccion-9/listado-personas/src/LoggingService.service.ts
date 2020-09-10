export class LoggingService {

  public enviaMensajeConsola(mensaje:string):void {

    console.log(mensaje);

  }

} /* Un service en Angular, es una clase de Typescript que va a ser usada por varios componentes (métodos
centralizados en una clase).
Sirven para compartir información entre componentes.
Lo normal, es que el service no devuelva información que provenga de una fuente de datos.
Los datos pueden obtenerse de manera dinámica o estática.
No se crean nuevas instancias de servicios.
Los servicios se inyectan en el constructor a través del concepto DI (Dependency Injection).
A los servicios hay que agregarlos como parte de la definicioón del componente.
  providers: [LoggingService]
Para usarlo, hay que crear una instancia nueca en cada componente.
Si queremos crear una sola para todos, hay que definirlo en el app.module.ts
Los servicios funcionan con el concepto de jerarquía.
  1) Si se define en app.module.ts, el servicio lo comparten todos los componentes y otros
  servicios.
  2) Si se define en un componente, solamente se comparte con los copmponentes hijos. */
