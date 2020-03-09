/* El operador SPREAD.
Muy cercado al REST, se encuentra el operador spread.
Mientras que el parámetro REST permite especificar argumentos independientes que serán combinados
en un arreglo, el operador spread permite especificar un arreglo que será separado, y cada
ítem enviado será un argumento independiente a la función. */
/* ES5.
var numeros = [1, 5, 10, 20, 100, 234];
var max = Math.max.apply(Math, numeros);
// Las funciones tienen un método llamado apply, que permite cambiar el valor del 
objeto this, y mandar un array adicional. //

console.log(max); */

// ES6.
var numeros = [1, 5, 10, 20, 100, 234];
var max = Math.max(...numeros);

console.log(max);
