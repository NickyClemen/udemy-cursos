document.body.addEventListener('click', eliminarElemento);

function eliminarElemento(e) {

    e.preventDefault();
    console.log(e);
    console.log(e.target.classList);

    if(e.target.classList.contains('borrar-curso')) {

        console.log('Sí.');
        /* Delegation: Estar pendiente de los clicks en la página, y ejecutar un bloque de código cuando
        cuando se presente el elemento especificado. Evita la repetición del eventlistenner. */

    }

}