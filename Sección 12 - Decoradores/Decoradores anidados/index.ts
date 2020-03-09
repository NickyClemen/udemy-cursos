function planVillano(constructor:Function) {

  constructor.prototype.imprimirPlan = function() {

    console.log(`El plan de ${ this.nombre } es dominar el mundo.`);

  }

}

function imprimible(constructor:Function) {

  constructor.prototype.imprimir = function() {

    console.log(this);

  }

}

@imprimible
@planVillano
class Villano {

  constructor(public nombre:string, public poder:string) {}

}

let lex = new Villano('Lex Luthor', 'Inteligencia');
(<any>lex).imprimirPlan();
(<any>lex).imprimir();
