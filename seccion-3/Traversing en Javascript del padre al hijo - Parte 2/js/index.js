/* Traversing: Permite recorrer todos los nodos del documento HTML. */
const enlaces = document.querySelectorAll('.enlace');
const cursos = document.querySelectorAll('.card');

console.log(enlaces);
console.log(enlaces[0].parentNode); // Va hasta el nodo padre.
console.log(enlaces[0].parentElement); // Va hasta el elemento padre. Se recomienda usar éste por sobre parentNode.

console.log(cursos);
console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent = 'Hola desde traversing.');
// Puede ir hasta arriba tanto como lo permita el DOM.

/* Sibling */
const enlace = document.querySelectorAll('.enlace');

console.log(enlace);
console.log(enlace[4].previousSibling); // Accede al nodo.
console.log(enlace[4].previousElementSibling); // Accceder al elemento.
console.log(enlace[0].nextElementSibling) // Accede al próximo elemento.
