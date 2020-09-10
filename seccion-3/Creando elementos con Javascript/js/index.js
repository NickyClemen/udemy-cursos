// Crear elemento.
const enlace = document.createElement('a'); // Se le pasa la etiqueta que se quiere crear.

// Agregar una clase.
enlace.className = 'enlace';

// Agregar un ID.
enlace.id = 'nuevo-id';

// Añador atribito.
enlace.setAttribute('href', '#');

// Añadir texto.
enlace.textContent = 'Nuevo enlace';
enlace.appendChild(document.createTextNode('Nuevo, nuevo enlace'));

// Agregarlo al HTML.
document.querySelector('#secundaria').appendChild(enlace);

console.log(enlace);