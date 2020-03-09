// Las clases se pueden definir como expresiones al igual que las funciones.
let miFuncion = function() {

    console.log('Hola mundo.');

}

let otraFuncion = miFuncion;

console.log(typeof otraFuncion);
otraFuncion();

// Con clases.
let Persona = class {

    constructor() {

        this.nombre = '';
        this.edad = 30;
        this.direccion = 'Calle Falsa 123';

    }

    decirNombre() {

        console.log('Hola mundo');

    }

}

let nicole = new Persona('Nicole');

console.log(nicole);
console.log(typeof nicole);
console.log(nicole instanceof Persona);