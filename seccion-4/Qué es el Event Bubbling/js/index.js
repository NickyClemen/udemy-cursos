/* Event Bubbling. Burbuja de eventos. Cuando hay elementos vinculados a un evento anidado, se propaga por los
elementos contenedores. */
const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', (e) => {

    console.log('Click en card.');
    e.stopPropagation(); // Evita que se propague el evento.

});

infoCurso.addEventListener('click', (e) => {

    console.log('Click en infocurso.');
    e.stopPropagation();

});

agregarCarrito.addEventListener('click', (e) => {

    console.log('Click en agregar carrito.');
    e.stopPropagation();

});