// Cuando se agrega o quita un elemento, tiene que ser desde el padre.
const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');

const primerLista = document.querySelector('.enlace');
let elemento;

// Remover elemento.
enlaces[0].remove();

// Remover desde el padre.
navegacion.removeChild(enlaces[1]);

// Remover elementos.
console.log(enlaces);
console.log(navegacion);

elemento = primerLista.className; // Retorna la clase.
elemento = primerLista.classList; // Retorna la clase es un DOMTokenList.

// Agregar una clase.
elemento = primerLista.classList.add('nueva-class');

// Remover una clase.
elemento = primerLista.classList.remove('nueva-class');

// Obtener atributos.
elemento = primerLista.getAttribute('href');

// Setear atributo.
primerLista.setAttribute('href', 'http://www.facebook.com');
elemento = primerLista;
primerLista.setAttribute('data-id', 20);

// Comprobar si tiene el atributo.
elemento = primerLista.hasAttribute('data-id');

// Eliminar atributo.
primerLista.removeAttribute('data-id');
elemento = primerLista;

// Agregar y remover atributos.
console.log(primerLista);
console.log(elemento);