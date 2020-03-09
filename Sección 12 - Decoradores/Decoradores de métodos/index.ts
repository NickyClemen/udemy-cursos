function editable(esEditable:boolean) {

  return function(target:any, nombrePropiedad:string, descriptor:PropertyDescriptor) {

    if(!esEditable) {

      console.log('No lo intentes más, Superman.');

    }

    descriptor.writable = esEditable;

  }

}

/* Diferencia entre un factory decorator, de clase y de método: Los argumentos que reciben.
Los decoradores de métodos tienen que retornar una función, la cuál recibe tres argumentos:
  1) Target: Tipo de función que se quiere sobreescribir.
  2) Nombre de la propiedad.
  3) PropertyDescriptor: Modifica o añade una propiedad. */

class Villano {

  constructor(public nombre:string) {}

  @editable(false)
  public plan():void {

    console.log('El plan es matar a Superman.');

  }

}

let lex = new Villano('Lex Luthor');

lex.plan = function() {

  console.log('Quedarse en la oficina.');

}

lex.plan();
