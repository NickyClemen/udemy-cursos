let frutas = ['Banana', 'Pera', 'Uva'];

let [frutaUno, frutaDos] = frutas;
// La destructuración es secuencial.

// Si se quiere solamente el tercer elemento.
let [,, frutaTres] = frutas;

/* La destructuración puede sobreescribir los valores de variables que tenga. */
let otraFruta = 'Manzana';

[otraFruta] = frutas;

/* En ES5, y en otros lenguajes de programación, si se quisiera intercambiar los valores de una variable.
se debería crear una temporal que albergue el valor de una para hacer el cambio. */
let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b = temp;

// Con destructuración de arrays.
[a, b] = [b, a];

console.log(frutaUno);
console.log(frutaDos);
console.log(frutaTres);
// Con destructuración, otraFruta pasa a tener el nombre de la primera posición del array.
console.log(otraFruta);
console.log(a);
console.log(b);