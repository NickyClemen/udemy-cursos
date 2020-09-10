let elemento;
let enlace;

// querySelector.
elemento = document.querySelector('#encabezado');
elemento = document.querySelector('h1'); // Permite seleccionar por etiqueta. Se puede combinar con CSS3.
enlace = document.querySelector('.enlace'); // Trae el primer elemento que encuentre del DOM.
enlace = document.querySelectorAll('.enlace');

/* getElementById solamente selecciona ids. El querySelector puede capturar ids y class. 
Retornan un valor. */

elemento.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';

console.log(elemento);
console.log(enlace); 