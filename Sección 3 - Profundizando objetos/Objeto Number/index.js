// Dos maneras de representarlos.
// var a = 10; Es el valor primitivo.
var b = new Number(10); // Es un objeto que tiene un valor primitivo.
var a = 10.456789;

console.log(a.toFixed(2));
/* Formatea el número a una cantidad de datos decimales. Toma el número, lo corta y lo redondea.
Acepta veinte decimales. */

console.log(a.toString());
// Devuelve el valor textual de la variable como si fuera un string.

console.log(a.toPrecision(2));
/* Redondea el número de la manera más precisa posible, basándose en el número de caracteres de 
retornar. */

// Las variables numéricas aguantan hasta trescientos ocho números exponenciales (después da Infinity).
// Los números se pueden multiplicar por un string (retorna NaN).

// valueOf
var d = new Number('20');

console.log(d);
console.log(d.valueOf());

console.log(a);
console.log(b);
console.log(a == b);
console.log(a === b);