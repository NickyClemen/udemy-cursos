/* Los objetos en ES6, han recibido muchas mejoras, ya que casi cualquier cosa en Javascript es
algún tipo de objeto. 

Objetos literales
Este tipo de estructura, es el patrón más utilizado en Javascript (se construyó de ésta sintáxis).
Dichos objetos, se encuentran en casi cualquier script en Internet, casi el 99% de los programas
los utilizan en algún punto. */

// En ES5, los objetos literales son colecciones de pares.
var objeto = {

    // nombre de la propiedad: valor de la propiedad.
    nombre: 'Nicole',

}

function crearPersona(nombre, apellido, edad) {

    return {

        nombre: nombre,
        apellido: apellido,
        edad: edad

    }

}

var nicole = crearPersona('Nicole', 'Ordoqui', '28');
console.log(nicole); 

// ES6

function crearPerson(nombre, apellido, edad) {

    return {

        nombre,
        apellido,
        edad
        // En ES6, se permite obviar el nombre de la propiedad si es igual a su valor.

    }

}

var cirilla = crearPerson('Cirilla', 'Rusch', '1');
console.log(cirilla);