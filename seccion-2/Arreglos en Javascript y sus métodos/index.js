// Array de enteros.
const numbers = [10, 20, 30, 40, 50];

// Array de string.
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');

/* Se puede almacenar más de un tipo de dato. 

Métodos
length -> Devuelve la cantidad de posiciones en el array.
push() -> Mete un elemento en la última posición del array. */

// Agregar elementos al final del array.
meses.push('Mayo');

// Agregar elementos al principio del array.
meses.unshift('Mes 0');

// Eliminar elementos al final del array.
meses.pop();

// Eliminar elementos al principio del array.
meses.shift();

// Eliminar un rango.
meses.splice(2, 1);
/* Los dos parámetros son el rango que se quiere eliminar:
    1) Posición desde la que se empieza eliminar.
    2) Cantidad de posiciones. */

// Revertir un array. Cambia el orden de atrás hacía adelante.
meses.reverse();

// Unir dos arrays.
let arrayUno = [1, 2, 3];
let arrayDos = [4, 5, 6];
console.log(arrayUno.concat(arrayDos));

// Ordenar arrays.
const frutas = ['Banana', 'Manzana', 'Frutilla', 'Naranja'];
frutas.sort();
console.log(frutas);

// Ordenas números.
let numeros = [3, 9, 91, 92, 23, 45, 21, 56, 1, 100, 10];
numeros.sort(function(a, b) {

    /* Ordear de menor a mayor. 
    return a - b; */
    // Ordenar de mayor a menor.
    return b - a;

});
console.log(numeros);

// Encontrar elementos.
console.log(meses.indexOf('Abril'));

console.log(numbers);
console.log(meses);

// Comprobar si es un array. Devuelve un boolean.
console.log(Array.isArray(meses));