const IMPUESTO_SV = 15.25;
// IMPUESTO_SV = 33;
const PERSONA = {

    nombre: 'Nicole',
    apellido: 'Ordoqui'

}

/* PERSONA = {

    nombre: 'Ivan',
    apellido: 'Rusch'

} */

if (true) {

    const IMPUESTO_SV = 19.75;
    console.log(IMPUESTO_SV);

}

PERSONA.nombre = 'Cirilla';

console.log(IMPUESTO_SV);
console.log(PERSONA);

/* En ES6, se incoporó el concepto de las constantes (se definen con la palabra reservada const, 
es un tipo de dato que no puede variar (no puede variar su valor).
Es buena práctica escribirlas en mayúsculas. 
Una de las reglas, es que tienen que inicializarse cuando son definidas.
Similar a let, la constante se crea en el bloque que fue definida. 
En las constantes, se pueden declarar objetos.
En el ES6, se pueden modificar los valores de las propiedades de los objetos. Lo que si no está
permitido, es la reinicialización del objeto completo. */


