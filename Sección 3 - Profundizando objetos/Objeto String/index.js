/* En otros lenguajes de programación, los string son arryas de caracteres.
En JS, un objeto tipo String es un objeto. */
var a = new String('Nicole Ordoqui');
var b = 'Cirilla';

var nombre = a.substr(7, 3);
/*Cortar una porción del string. Como parámetro, hay que pasarle la posición de la que se quiere
comenzar a cortar. El segundo parámetro, son la cantidad de posiciones a cortar. */

var nombre = a.substr(0, a.indexOf(' '));
// Recuperar el nombre entero.

var i = a.indexOf('e');
// Devuelve la posición en la que está el parámetro.

j = b.lastIndexOf('l');
// Devuelve la última posición en la que está el parámetro.
// indexOf() y lastIndexOf() también funcionan con cadenas de texto.

// Los strings tiene funciones parecidas a los arrays.
var split = a.split();
// Crea un array con el valor de la variable.

var splitEsp = a.split(' ');
// Crea un array sin espacios en blanco.

console.log(a);

// Convetir en mayúsculas.
console.log(a.toUpperCase());

// Convetir en minúsculas.
console.log(a.toLowerCase());

console.log(i);

console.log(nombre);

console.log(split);

console.log(splitEsp.length);

// Funciones casi sin uso debido a los frameworks/librerías que permiten insertar semántica HTML.
document.write('Hola mundo.');
// Inserta en el browser el texto pasado por parámetro.

console.log(a.italics());
// Devuelve la varibale en <i></i>

console.log(a.blink());