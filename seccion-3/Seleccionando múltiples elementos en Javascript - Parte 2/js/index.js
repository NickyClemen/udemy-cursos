let enlaces = document.querySelectorAll('#principal .enlace');
// Regresa una lista de todos los elementos, mietras que querySelector sólo un elemento.

let images = document.querySelectorAll('img');

// Combinar con elementos de CSS.
const listaEnlaces = document.querySelectorAll('#principal a:nth-child(odd)');

listaEnlaces.forEach((impares) => {

    impares.style.backgroundColor = '#ff0000';
    impares.style.color = '#ffffff';

})

// CSS
enlaces[1].style.background = '#ff0000';
enlaces[1].textContent = 'Nuevo enlace';

console.log(enlaces);
console.log(images);
console.log(listaEnlaces)