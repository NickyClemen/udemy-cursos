/* Las funciones anónimas, son funciones que se ejecutan inmediatamente en el momento en que son creadas.
Pueden ser anónimas (no tienen nombre de función). */

// ES5.
var saludoUno = function(nombre) {

    return 'Hola, ' + nombre;

}('Nicole');
// El resultado de la función, se almacena en la variable.

console.log(saludoUno);

// ES6.
let saludoDos = ((nombre) => `Hola, ${ nombre }.`)('Cirilla');
// Cuando se necesite que una función se ejecute inmediatamente, van los ().

console.log(saludoDos);