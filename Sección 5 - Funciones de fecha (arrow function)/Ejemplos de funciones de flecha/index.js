// ES5.
// Ejemplo de función.
var miFuncionDos = function(valor) {

    return valor;

}

// Dos parámetros.
var sumarDos = function(numUno, numDos) {

    return numUno + numDos;

}

// Sin parámetros.
var saludarDos = function() {

    return 'Hola mundo.';

}

// Varias líneas.
var saludarPersonaDos = function(nombre) {

    var salida = 'Hola, ' +  nombre;
    return salida;

}

// Retornar un objeto literal de una función.
var obtenerLibroDos = function(id) {

    return {

        id: id,
        nombre: 'Harry Potter',

    }

}

// ES6.
// Ejemplo de función.
let miFuncionUno = valor => valor;

// Dos parámetros.
let sumarUno = (numUno, numDos) => numUno + numDos;

// Sin parámetros.
let saludarUno = () => 'Hola mundo.';

// Varias líneas.
let saludarPersonaUno = (nombre) => {

    let salida = `Hola, ${ nombre }.`;
    return salida;

}

// Retornal un objeto literal de una función.
let obtenerLibroUno = (id) => ({

    id: id,
    nombre: 'Harry Potter',

});