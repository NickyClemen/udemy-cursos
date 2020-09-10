/* Traversing: Poder recorrer un documento. */
const navegacion = document.querySelector('#principal');
const barra = document.querySelector(".barra");
const cursos = document.querySelectorAll('.card');

console.log(navegacion.childNodes); // Devuelve los nodos (elementos) del DOM.
console.log(navegacion.children); // Devuelve los hijos del elemento.
console.log(navegacion.children[0].nodeName);
console.log(navegacion.nodeName);
console.log(navegacion.nodeType);
/* Regresa enteros.
    1) 1: Elementos HTML.
    2) 2: Atributos.
    3) 3: Text Node.
    4) 8: Comentarios.
    5) 9: Documentos.
    6) 10: Doctype. */

console.log(barra.children);
console.log(cursos);

console.log(cursos[0].lastChild); // Último nodo.
console.log(cursos[0].firstElementChild); // Primer hijo del elemento.
console.log(cursos[0].lastElementChild); // Último hijo del elemento.
console.log(cursos[0].childElementCount); // Contar los elementos.