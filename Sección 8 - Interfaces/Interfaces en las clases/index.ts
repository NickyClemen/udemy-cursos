interface Xmen {

  nombre:string,
  nombreReal?:string,
  regenerar(nombreReal:string):void;// Método obligatorio.

} /* Se puede utilizar las interfaces para forzar los métodos y propiedades que va a tener
una clase. */

class Mutante implements Xmen {

  nombre:string;
  regenerar(nombre:string):void {

    console.log(`Hola, ${ nombre }.`);

  }

}

let wolverine:Mutante = new Mutante();
wolverine.regenerar('Logan');
