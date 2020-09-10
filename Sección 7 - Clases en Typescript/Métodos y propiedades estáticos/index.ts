class Xmen {
  /* Propiedades y métodos estáticos.
  Se puede llamar sin instanciar la clase. Se pueden llamar directamente desde cualquier parte
  del programa. */
  static nombre:string = 'Wolverine';

  constructor() {
  }

  static crearXmen() {

    return new Xmen();

  }

}

let wolverine = Xmen.crearXmen();

console.log(Xmen.nombre);
console.log(wolverine);
