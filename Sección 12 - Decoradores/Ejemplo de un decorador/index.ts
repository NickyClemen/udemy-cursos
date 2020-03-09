function planVillano(constructor:Function) {

  constructor.prototype.imprimirPlan = function() {

    console.log(`El plan de ${ this.nombre } es dominar el mundo.`);

  }

} // Los decoradores de clase, reciben el constructor.

@planVillano
class Villano {

  constructor(public nombre:string) {}

}

let lex = new Villano('Lex Luthor');
(<any>lex).imprimirPlan();
// La única manera de que el error se vaya, es haciendo un casteo.
