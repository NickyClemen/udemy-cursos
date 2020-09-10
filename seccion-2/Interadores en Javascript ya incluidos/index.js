const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('Nombre', 'Nicole');
datos.set('Profesión', 'Programador');

// Entries iterador. Devuelve key y valor.
for (let entrada of ciudades.entries()) {

    console.log(entrada);

}

for (let orden of ordenes.entries()) {

    console.log(orden);

}

for (let dato of datos.entries()) {

    console.log(dato);

}

// Values iterador. Devuelve los valores, ignorando las keys.
for (let entrada of ciudades.values()) {

    console.log(entrada);

}

for (let orden of ordenes.values()) {

    console.log(orden);

}

for (let dato of datos.values()) {

    console.log(dato);

}

// Keys iterador. Devuelve los keys, ignorando los valores.
for (let entrada of ciudades.keys()) {

    console.log(entrada);

}

for (let orden of ordenes.keys()) {

    console.log(orden);

}

for (let dato of datos.keys()) {

    console.log(dato);

}

// default. Cuando no se especifica el iterador.
for (let entrada of ciudades) {

    console.log(entrada);

}

for (let orden of ordenes) {

    console.log(orden);

}

for (let dato of datos) {

    console.log(dato);

}

// Iteradores para un string.
const mensaje = 'Aprendiendo Javascript.';

/* Forma vieja.
for (let i = 0; i < mensaje.length; i++) {

    console.log(mensaje[i]);

} */

// Forma nueva.
for (let letra of mensaje) {

    console.log(letra);

}

// Iterar enlaces.
const enlaces = document.getElementsByTagName('a');

for (let enlace of enlaces) {

    console.log(enlace.href);

}