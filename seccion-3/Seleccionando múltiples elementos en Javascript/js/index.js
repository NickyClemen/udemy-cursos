let enlaces = document.getElementsByClassName('enlace')[3];
// Retorna múltiples elementos con la clase pasada por parámetro.

// CSS
enlaces.style.background = '#333';

// Cambiar texto.
enlaces.textContent = 'Nuevo enlace';

// Mezclar querySelector con getElementByClassName.
const listaEnlaces = document.querySelector('ul').getElementsByClassName('enlace');

const links = document.getElementsByTagName('a');
// Retorna elementos por la etiqueta de HTML.

// CSS
links[18].style.color = '#ff0000';

// Cambiar texto.
links[18].textContent = 'Nuevo nuevo enlace';

// Transformar HTMLCollection en un array.
let linkArray = Array.from(links);

linkArray.forEach((enlace) => {

    console.log(enlace.textContent);

})

console.log(enlaces);
console.log(listaEnlaces);
console.log(links);
console.log(linkArray);