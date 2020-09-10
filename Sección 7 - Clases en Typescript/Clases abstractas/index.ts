abstract class Mutantes {
  /* Clases abstractas. Esa palabra reservada evita que se creen instancias de una clase.
  No se puede crear una instancia de una clase abstracta.
  Sirven para crear un 'molde' de clase, y heredarle las propiedades y métodos a otras. */
  constructor(public nombre:string, public nombreReal:string) {}

}

class Xmen extends Mutantes {

  // Hereda el constructor de la clase padre.

}

let cyclops:Xmen = new Xmen('Cyclops', 'Scott Summers');
