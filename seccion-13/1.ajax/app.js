/* Ajax es una buena opción si se quiere cargar información sin cargar la página (desde una base de datos). */
const cargar = document.getElementById('cargar');

eventListeners();

function eventListeners() {
    cargar.addEventListener('click', cargarDatos);
}

function cargarDatos() {
    const xhr = new XMLHttpRequest();
    // Se instancia un método para poder interactuar con Ajax. Puede manejar varios tipos de archicos.

    // Abrir una conexión.
    xhr.open('GET', './datos.txt', true);
    /* Primer parámetro: Tipo de llamado.
        GET: LLamar.
        POST: Enviar.
        PUT: Actualizar.
        DELETE: Eliminar.
    Segundo parámetro: URL.
    Tercer parámetro: Un boolean que habilita la asincronía. */

    // Cargar página. Forma larga.
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        }
    } /* States:
        0: No inicializado.
        1: Conexión establecida.
        2: Recibido.
        3: Procesando.
        4: Respuesta lista. */

    // Cargar página. Forma resumida.
    /* xhr.onload = function() {
        /* Se revisa el estado/status:
            200: Correcto.
            403: Request prohibida.
            404: Noy found. 
        if(this.status === 200) {
            let listado = document.getElementById('listado');
            listado.innerHTML = `<h1>${ this.responseText }</h1>`;
            // Respuesta de los datos que se están solicitando.
        }
    } */

    // Enviar el request.
    xhr.send();
}