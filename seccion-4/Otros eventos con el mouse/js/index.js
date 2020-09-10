// Variables.
const boton = document.querySelector('#vaciar-carrito');
const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');

/* Click.
boton.addEventListener('click', obtenerEvento); */

/* Doble-click.
boton.addEventListener('dblclick', obtenerEvento); */

/* Mouseenter. Cuando el curso está en el elemento.
boton.addEventListener('mouseenter', obtenerEvento); */

/* Mouseleave. Cuando el cursor sale del elemento.
boton.addEventListener('mouseleave', obtenerEvento); */

/* Mouseover. Cuando el cursor pasa por encima, sin click.
boton.addEventListener('mouseover', obtenerEvento); */

/* Mouseout.
boton.addEventListener('mouseout', obtenerEvento); */

/* Mousedown. Cuando se hace click abajo del elemento.
boton.addEventListener('mousedown', obtenerEvento); */

/* Mousemove. Cada vez que se mueve el cursor.
encabezado.addEventListener('mousemove', obtenerEvento); */

// Mouseup. Cuando se hace click arriba del elemento.
boton.addEventListener('mouseup', obtenerEvento);

function obtenerEvento(e) {

    console.log(`El evento que se está ejecutando es ${ e.type }.`);
    // e.type devuelve el tipo de evento que se está ejecutando.

}