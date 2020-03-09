// Crear interfaces
interface Auto {

  encender:boolean;
  velocidadMaxima:number;
  acelerar():void;

}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil( auto:Auto ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

let batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... run!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
interface Joker {

  reir:boolean;
  comer?:boolean;
  llorar?:boolean;

}
// utilizando propiedades opcionales
let guason:Joker = {
  reir: true,
  comer:true,
  llorar:false
}

function reir( guason:Joker ):void{
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}

// Cree una interfaz para la siguiente funcion
interface GothamCityFunc {

  (ciudadanos:string[]) : number;

}

let ciudadGotica:GothamCityFunc;
ciudadGotica = function(ciudadanos:string[]):number{
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface Persona {

  nombre:string;
  edad:number;
  sexo:string;
  estadoCivil:string;
  imprimirBio():void;

}

class PersonaClass implements Persona {

  nombre:string;
  edad:number;
  sexo:string;
  estadoCivil:string;
  imprimirBio() {

    console.log('Hola.');

  }

}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
