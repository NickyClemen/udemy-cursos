/* Symbol: Permite crear propiedades únicas. Tipo de dato primitivo. Cada symbol es único. No se puede repetir.
Se los considera propiedades privadas. Los symbols no son iterables. */
const symbol = Symbol();
const symbolTwo = Symbol('Agregar descripción acá.');

let nombre = Symbol();
let apellido = Symbol();

let persona = {};
persona.nombre = 'Nicole';
// Agregar el symbol. H
persona[nombre] = 'Nicole';
persona[apellido] = 'Ordoqui';
persona.saldo = 1000;

console.log(symbol);
console.log(symbolTwo);
console.log(Symbol() === Symbol());

console.log(persona);
// Hay que usar corchetes para leer el symbol en un objeto. El punto es para acceder a los atributos.
console.log(persona[nombre]);
