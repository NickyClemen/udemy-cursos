// Crear una sola instancia de una clase.
class Apocalypsis {

  static instancia:Apocalypsis;

  private constructor(public nombre:string) {
  } /* Un constructor privado puede ser llamado solamente dentro de la clase, por lo que no se
  puede instanciar. */

  static getInstance() {

    if(!Apocalypsis.instancia) {

      Apocalypsis.instancia = new Apocalypsis('Apocalypsis now');

    }

    return Apocalypsis.instancia;

  } // Permite retornar una única instancia del objeto.

}

// let apocalypsis:Apocalypsis = new Apocalypsis('Apocalypsis');
let apocalypsis = Apocalypsis.getInstance();
console.log(apocalypsis);
