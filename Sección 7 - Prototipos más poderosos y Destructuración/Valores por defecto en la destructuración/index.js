/* Los valores por defecto, funcionan tanto para los arrays como para los objetos. */
// En arrays.
let frutas = ['Banana', 'Pera'];
let [frutaUno, frutaDos = 'Manzana'] = frutas;
/* Los valores por defecto, al igual que en las funciones, nos permite darle un valor a una variable
si no lo trae. */

console.log(frutaUno);
console.log(frutaDos);

// En objetos.
let opciones = {

    nombre: 'Nicole',

}

let { nombre, apellido = 'Ordoqui' } = opciones;

console.log(nombre, apellido);
