/* # es acción por default. */
/* Event listener click al buscador.
document.querySelector('#submit-buscador').addEventListener('click', (event) => {
    // Convenciones: e, event o evt.
    e.preventDefault(); // Evita que se ejecute la acción por default.
    alert('Buscando cursos.');

}); */

document.querySelector('#submit-buscador').addEventListener('click', ejecutarSearch);

document.querySelector('#encabezado').addEventListener('click', (e) => {

    console.log(e.target.innerText);

});

// Se puede codificar la función afuera.
function ejecutarSearch(e) {

    e.preventDefault();

    /* La información más importante de un evento está en su target. */
    let elemento;
    elemento = e;
    elemento = e.target;
    elemento = e.target.id;
    elemento = e.target.className;
    elemento = e.target.innerText;

    console.log(elemento);

    alert('Buscando cursos desde la función.');

}

