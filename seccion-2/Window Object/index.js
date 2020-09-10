/* Window Object es la ventana de navegación. */

/* Funciones parte del window object.
// prompt
const nombre = prompt('Ingresá tu nombre: ');
console.log(nombre);

// confirm
if (confirm('¿Desea eliminar?')) {

    console.log('Eliminado.');

} else {

    console.log('Cancelado.');

} */

// Información del navegador.

// Reporta cuánto mide el navegador.
let altura = window.outerHeight;
let ancho = window.outerWidth;

// Reporta cuánto mide la ventana.
let alt = window.innerHeight;
let anch = window.innerWidth;

console.log(altura);
console.log(ancho);

console.log(alt);
console.log(anch);

// Ubicación.
let ubicacion = window.location;

/* Redireccionar.
ubicacion.href = 'https://twitter.com'; */

console.log(ubicacion); // Regresa la URL.

/* Historial.
window.history.go(-1); */

// Navigator.
let navegacion = window.navigator;
let navegacionAppName = window.navigator.appName;
let navegacionAppVersion = window.navigator.appVersion;
let navegacionUserAgent = window.navigator.userAgent;
let navegacionLanguage = window.navigator.language; // Devuelve el lenguaje en el que está configurado el sistema operativo.

console.log(navegacion);
console.log(navegacionAppName);
console.log(navegacionAppVersion);
console.log(navegacionUserAgent);
console.log(navegacionLanguage);



