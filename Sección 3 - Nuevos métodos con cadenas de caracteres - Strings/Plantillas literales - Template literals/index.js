/* Template literals
En JS, siempre hemos tenido una funcionalidad limitada en el uso de los strings comparados con otros
lenguajes. */

function obtenerNombre() {

    return 'Cirilla Rusch';

}

// ES5
let nombre = 'Nicole';
let apellido = 'Ordoqui';
let nombreCompleto = nombre + ' ' +  apellido;

console.log(nombreCompleto);

// ES6.
let completoNombre = `El nombre completo es ${ nombre } ${ apellido }.`;
// string que puede mutar en sí mismo.
let hija = `El nombre completo es ${ obtenerNombre() }.`;

console.log(completoNombre);
console.log(hija);

/* Cuando JS encuentra las llaves, lo que hay adentro es código puro (válido), por lo que se puede hacer
cualquier cosa. */
let suma = `El resultado de la suma es de ${ 1 + 2 }.`
console.log(suma);

/* Otra cosa importante, es que nos permite crear multilíneas. */
// ES5
var multiLinea = '<h1>Titulo</h1> \n<p>Hola mundo</p>';
console.log(multiLinea); 

// ES6
let multilinea = `<h1 class="algo"Hola, ${ nombre }</h1>
<p>${ apellido }</p>`;
console.log(multilinea);
// Si se hace un count de caracteres, el enter cuenta como uno.