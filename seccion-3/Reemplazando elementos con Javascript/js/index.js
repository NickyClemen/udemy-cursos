// Elemento nuevo.
const newHeader = document.createElement('h2');

// Elemento a reemplazar.
const oldHeader = document.querySelector('#encabezado');
// Elemento padre.
const fatherElement = document.querySelector('#lista-cursos');

// Agregar ID.
newHeader.id = 'encabezado';

// Agregar nuevo texto.
newHeader.appendChild(document.createTextNode('Los mejores cursos')); // Agrega nodos hijos.

// Reemplazar elemento.
fatherElement.replaceChild(newHeader, oldHeader); // Recibe el nuevo elemento, y el elemento a reemplzar por parámetro.