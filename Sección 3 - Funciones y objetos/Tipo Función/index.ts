// Reglas para variables de tipo función.

function sumar(a:number, b:number):number {

    return (a + b);

}

function saludar(nombre:string):string {

    return `I'm ${ nombre }.`;

}

function salvarMundo():void {

    console.log('El mundo está a salvo.');

}

let miFunction: (a:number, b:number) => number;
// Retorna number.

let myFn: (a:string) => string;
// Retorna String.

let fn: () =>  void;
// Al dejar así (), la función no tiene parámetros. Retorna void.

// miFunction = 10;

miFunction = sumar;
console.log(miFunction(5,5));

myFn = saludar;
console.log(myFn('Nicole'));

fn = salvarMundo;
console.log(fn());

