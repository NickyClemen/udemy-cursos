import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Persona } from "./persona.model";

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}
 /* Éste servicio se encarga de la conexión con la base de datos.
 Se logra con el uso de otro servicio: httpClient. */

 cargarPersonas() {
   return this.httpClient.get('https://listado-personas-36835.firebaseio.com/datos.json');
   /* Permite recuperar datos de la base de datos.
   Retorna un objeto de tipo observable, por lo que hay que suscribirse para poder ver la información (se subscribe a la
   llamada el método). */
 }

 guardarPersonas(personas: Persona[]) {
   this.httpClient.put('https://listado-personas-36835.firebaseio.com/datos.json', personas).subscribe(
     (response) => console.log(`El resultado de guardar ${ response }.`),
     (error) => console.log(`El error es ${ error }.`) // Controla errores.
   ); /* Envía información al servidor.
   Tiene dos parámetros:
      1) URL. Al ser una real-time database, se necesita un nombre. Todos los archivos tienen que terminar
      en .json.
      2) Los datos que se van a almacenar.
   Retorna un objeto de tipo observable, por lo que hay que suscribirse para poder ver la información (se subscribe a la
   llamada el método).
   En la base de datos, se genera un ID único por cada llamada al método post. Por cada petición post, se vuelve
   a guardar toda la información.
   El método put actualiza la información. No genera un ID; almacena la información directamente. */
 }

  modificarPersona(index:number, persona:Persona) {
     let url:string;
     url = `https://listado-personas-36835.firebaseio.com/datos/${ index }.json`;
     this.httpClient.put(url, persona).subscribe(
       response => console.log(`Resultado editado ${ response }.`),
       error => console.log(`Resultado editado ${ error }.`)
     );
  }

  eliminarPersona(index:number) {
    let url:string;
    url = `https://listado-personas-36835.firebaseio.com/datos/${ index }.json`;
    this.httpClient.delete(url).subscribe(
      response => console.log(`Resultado eliminado ${ response }.`),
      error => console.log(`Resultado eliminado ${ error }.`)
    );
  }
}
