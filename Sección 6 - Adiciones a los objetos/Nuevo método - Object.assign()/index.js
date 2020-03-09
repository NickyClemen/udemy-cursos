/* El ES6 incorporó una nueva función: El Object.assign(). Permite tomar todas las propiedades de un 
objeto, y heredárselas a otro sin usar la herencia directamente. */
// ES5.
var objReceptor = {};
var objDonador = {

    // nombre: 'mi-archivo.js',
    // ES6. 
    get nombre() {

        return 'mi-archivo.js';

    }    
    /* Sirven para obtener valores. Cuando se pasa por la función, no va a copiarse la definición de la 
    función, sino el valor de la propiedad. */

}

function mezclar(objReceptor, objDonador) {

    Object.keys(objDonador).forEach(function(key) {

        objReceptor[key] = objDonador[key];

    }); /* Object.keys() devuelve un array de las propiedades namesde un objeto,
    en el mismo orden como se obtienen en un loop normal. */

    return objReceptor;

}

// console.log(objDonador.nombre);
console.log(mezclar(objReceptor, objDonador));

// ES6.
console.log(Object.assign(objReceptor, objDonador));