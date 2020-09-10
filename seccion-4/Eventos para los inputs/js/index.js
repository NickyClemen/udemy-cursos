const busqueda = document.querySelector('#buscador');

/* Keydown. Se ejecuta todo el tiempo conforme se vaya escribiendo.
busqueda.addEventListener('keydown', obtenerEvento); */

/* Keyup. Cada vez que se suelta o se aprieta.
busqueda.addEventListener('keyup', obtenerEvento); */

/* Keypress. Se ejeucta sin importar la tecla que se esté apretando.
busqueda.addEventListener('keypress', obtenerEvento); */

/* Focus.
busqueda.addEventListener('focus', obtenerEvento); */

/* Blur. Se utiliza mucho para validaciones de formulario. Se activa cuando se hace click fuera de un input.
busqueda.addEventListener('blur', obtenerEvento); */

/* Cut. Cortar.
busqueda.addEventListener('cut', obtenerEvento); */

/* Copy. Copiar.
busqueda.addEventListener('copy', obtenerEvento); */

/* Paste. Pegar
busqueda.addEventListener('paste', obtenerEvento); */

/* Input. Evento general
busqueda.addEventListener('input', obtenerEvento); */

/* Change. Pendiente de los cambios de un select.
busqueda.addEventListener('change', obtenerEvento); */

function obtenerEvento(e) {

    /* console.log(busqueda.value);
    document.querySelector('#encabezado').innerText = busqueda.value; */
    console.log(`El evento que se está ejecutando es ${ e.type }.`);

}