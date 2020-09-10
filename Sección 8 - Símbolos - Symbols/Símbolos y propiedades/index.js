/* Tipo de dato. Son perfectos para almacenar nombres de propiedades, así nos aseguramos
que no van a a colisionar con nombres de propiedades que estés en otras librerías o codigo.
Los símbolos son un tipo de dato primitivo, no tienen un constructor, por lo que no se pueden declarar con 
new. */
let primerNombre = Symbol('primer nombre');
let segundoNombre = Symbol('segundo nombre');
/*A los symbols se le puede pasar un parámetro al llamado de su función al momento que se crean,
para ponerle algún tipo de identificación. 
Es opcional. */
let symbolOne = Symbol('simbolo');
let symbolTwo = Symbol('simbolo');

let persona = {

    [segundoNombre]: 'Ordoqui'

};

persona[primerNombre] = 'Nicole';

/* Si definimos una propiedas de un objeto como símbolo, hay que llamarla como una
propiedad computada. */
console.log(persona[primerNombre]);
console.log(persona[segundoNombre]);

console.log(primerNombre);
// Retorna el symbol y su alias.

console.log(symbolOne == symbolTwo);
console.log(symbolOne === symbolTwo);
console.log(Object.is(symbolOne, symbolTwo));
/* La característica principal de los symbols, es que siempre son diferentes. */

// Tipo de dato.
console.log(typeof symbolOne);

/* No se puede convertir un symbol a su valor string. 
console.log(`Mi símbolo es ${ primerNombre }.`); */

// Saber si una propiedad existe dentro de un objeto.
console.log('primer nombre' in persona);