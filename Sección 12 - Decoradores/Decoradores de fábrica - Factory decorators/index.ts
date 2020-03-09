// Class decorator.
function consola(constructor:Function) {

  console.log(constructor);

}

// Factory decorator.
function imprimirConsola(imprimir:boolean):Function {

  if(imprimir) {

    return consola;

  }

}

@imprimirConsola(true)
class Villano {

  constructor(public nombre:string) {}

}
/* Un factory decorator es una función común que puede recibir parámetros, pero tiene
que retornar algo que pueda ser utilizado como decorator. */
