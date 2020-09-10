// Forma convencional.
// String.
const nicole = 'Nicole';
// Números.
const edad = 29;
// Boolean.
const adulto = true;
// Funciones.
const func = function(a, b) {
    return a + b;
}
// Objectos.
const jessica = {
    name: 'Jessica',
}
// Arrays.
const numeros = [1, 2, 3, 4, 5];

// Cuando se crea con new, es un objeto. En el proto heredan métodos del objeto global Object.
// String.
const cirilla = new String('Cirilla');
// Números.
const age = new Number(1);
// Boolean.
const bebe = new Boolean(true);
// Funciones.
const fn = new Function('a', 'b', 'return a + b');
// Objetos.
const faye = new Object({ name: 'Faye', });
// Arrays.
const numers = new Array(1, 2, 3, 4, 5);

console.log(typeof nicole);
console.log(typeof cirilla);
console.log(fn(1, 2));