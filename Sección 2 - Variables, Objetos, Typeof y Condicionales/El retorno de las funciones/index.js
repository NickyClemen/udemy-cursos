/* Las funciones pueden retornar un tipo primitivo, undefined, un objeto, null o una función. */
// Retorna enteros.
function obtenerAleatorio() {

    return Math.random();

}

// Retorna string.
function obtenerNombre() {

    return 'Nicole';

}

// Retorna boolean.
function esMayor() {

    if (obtenerAleatorio() > 0.5) {

        return true;

    } else {

        return false;

    }

}

// Retorna objetos.
function crearPersona(nombre, apellido) {

    return {

        nombre: nombre,
        apellido: apellido,

    };  

}

// Retorna una función.
function crearFuncion() {

    return function(nombre) {

        console.log('Me creó ' +  nombre);

        return function() {

            console.log('Segunda función.');

        }

    }


}

if (esMayor()) {

    console.log('Es mayor a 0.5.');

} else {

    console.log('Es menor a 0.5.');

}

var nicole = crearPersona('Nicole', 'Ordoqui');
var nuevaFuncion = crearFuncion();

console.log(obtenerAleatorio(10));
console.log(obtenerNombre() + ' Ordoqui');
console.log(esMayor());
console.log(nuevaFuncion('Nicole'));