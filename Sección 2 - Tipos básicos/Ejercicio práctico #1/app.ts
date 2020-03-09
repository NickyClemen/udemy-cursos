// Tipos
let batman:string = "Bruce";
let superman:string = "Clark";

let existe:boolean = false;

// Tuplas
let parejaHeroes:[ string, string ] = [batman,superman];
let villano:[ string, number, boolean ] = ["Lex Lutor",5,true];

// Arreglos
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum Fuerza {

  aquaman = 0,
  batman = 1,
  flash = 5,
  superman = 100,

}

let fuerzaAquaman = Fuerza.aquaman;
let fuerzaBatman = Fuerza.batman;
let fuerzaFlash = Fuerza.flash;
let fuerzaSuperman = Fuerza.superman;

// Retorno de funciones
function activar_batiseñal():string {

  return "activada";

}

function pedir_ayuda():void {

  console.log("Auxilio!!!");

}

// Aserciones de Tipo
let poder:string = "100";
let largoDelPoder:number = (<string>poder).length;
console.log(largoDelPoder);

let poderUno:number = 100;
let largoDelPoderUno:number = (<string>poder).length;
console.log(largoDelPoder);
