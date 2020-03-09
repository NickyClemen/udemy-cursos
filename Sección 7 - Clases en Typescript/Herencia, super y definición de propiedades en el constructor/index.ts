class Avenger {
  
  constructor(public nombre:string, private nombreReal:string) {

  }

  protected getNombre() {

    return this.nombre;

  }

}

class Xmen extends Avenger {

  /* Cuando no se tiene definido un constructor en la clase hija, toma el de la clase padre.
  Los constructores de clases heredadas necesitan obligatoriamente llamar el super (se utiliza
  para llamar métodos y propiedades de la clase padre). */
  constructor(nombre:string, nombreReal:string) {

    super(nombre, nombreReal);

  }

  public getNombre() {

    return super.getNombre();

  }

}

let cyclops:Xmen = new Xmen('Cyclops', 'Scott Summer'); // Definir las propiedades.
console.log(cyclops.getNombre());
