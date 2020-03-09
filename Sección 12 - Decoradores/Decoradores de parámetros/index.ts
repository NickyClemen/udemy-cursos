function parametro(target:any, metodo:string, index:number) {

  console.log(target, metodo, index);

}


class Villano {

  constructor(public nombre:string) {}

  public imprimir(plan:boolean, @parametro mensaje:string):void {

    if(plan) {

      console.log(`El plan es ${ mensaje }.`);

    } else{

      console.log(mensaje);

    }

  }

}

let lex = new Villano('Lex Luthor');
lex.imprimir(false, 'conquistar el mundo');

/* Los decoradores de parámetros pueden servir para obtener información de los parámetros
que se están pasando en los métodos.
Reciben como parámetros:
  1) Target: Función.
  2) Nombre.
  3) Index: La posición del parámetro en la lista de argumentos. */
