class Avenger {

  /* Get y set: Formas de accesar propiedades, pero de una forma controlada.
  Funciones especiales para control del acceso de la información. Todos deberían ser públicos.
  El get, por defecto, siempre tiene que retornar algo.
  Los sets, por defecto, no regresan nada (se puede retornar el resultado). Tienen que tener al menos
  un parámetro. */
  private _nombre:string;

  constructor(nombre?:string) {

    this._nombre = nombre;

  }

  get nombre():string {

    if(this._nombre) {

      return this._nombre;

    } else {

      return `No hay parámetros.`;

    }

  }

  set nombre(nombre:string) {

    this._nombre = nombre;

  }

}

let cyclops:Avenger = new Avenger('Jean Gray');
cyclops.nombre = 'Cyclops';
console.log(cyclops.nombre);
