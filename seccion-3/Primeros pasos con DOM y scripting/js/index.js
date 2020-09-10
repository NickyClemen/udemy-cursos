let elementos;

elementos = document.all; // HTMLAllCollection
elementos = document.all[10]; // Retorna el elemento que esté en ese índice del array.
elementos = document.head; // Regresa el elemento seleccionado.
elementos = document.body;
elementos = document.domain; // Retorna la URL.
elementos = document.URL; // Retorna la URL junto al protocolo y la página actual.
elementos = document.characterSet; // Retorna la codificación del lenguaje (UTF-8).
elementos = document.forms; // Retorna los formularios.
elementos = document.forms[0];
elementos = document.forms[0].id;
elementos = document.forms[0].className; // Acceder a la clase.
elementos = document.forms[0].classList[0]; // Acceder a la clase.
elementos = document.images; // Retorma cuántas imágenes hay en el sitio.
elementos = document.images[2];
elementos = document.images[2].src;
elementos = document.images[2].getAttribute('src'); 
/* getAttribute() da acceso a todos los atributos de las etiquetas. */
elementos = document.scripts; // Retorna la cantidad de scripts que hay en la página.

// Ejercicio.
elementos = document.images; 
/* Retorna un HTMLCollection, no un array (puede accederse de la misma manera). */

let imagenes = document.images;
let imagenesArr = Array.from(imagenes);
// Array.from() sirve para transformar un HTMLCollection en un array.

imagenesArr.forEach(function(imagen) {

    console.log(imagen);

});

console.log(imagenesArr);