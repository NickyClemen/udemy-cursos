function editable(esEditable:boolean) {

  return function(target:any, nombrePropiedad:string, descriptor:PropertyDescriptor) {

    descriptor.writable = esEditable;

  }

}

function editableProp(esEditable:boolean) {

  return function(target:any, nombrePropiedad:string):any {

    let descriptor:PropertyDescriptor = {

      writable:esEditable,

    }

    return descriptor;

  } // La diferencia con el de método, las de propiedades no utilizan PropertyDescriptor.

}

class Villano {

  @editableProp(true)
  public nombre:string;

  constructor(nombre:string) {

    this.nombre = nombre;

  }

  @editable(true)
  public plan():void {

    console.log('El plan es matar a Superman.');

  }

}

let lex = new Villano('Lex Luthor');

console.log(lex);
