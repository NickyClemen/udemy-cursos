function funcGenetica<T>(arg:T) {

  return arg;

}

type Hero = {

  nombre:string;
  nombreReal:string;

}

type Villano = {

  nombre:string;
  poder:string;

}

let deadpool = {

  nombre: 'Deadpool',
  nombreReal: 'Wade Wilson',
  poder: 'Regeneración'

}

console.log(funcGenetica<Hero>(deadpool));
// En el '<>' se especifica el tipo de dato.
