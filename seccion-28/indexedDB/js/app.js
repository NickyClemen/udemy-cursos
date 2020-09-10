let DB;

const form = document.querySelector('form');
const nombreMascota = document.querySelector('#mascota');
const nombreCliente = document.querySelector('#cliente');
const telefono = document.querySelector('#telefono');
const fecha = document.querySelector('#fecha');
const hora = document.querySelector('#hora');
const sintomas = document.querySelector('#sintomas');
const citas = document.querySelector('#citas');
const headingAdministra = document.querySelector('#administra');

// Para usar IndexDB, tiene que estar cargado el DOM.
document.addEventListener('DOMContentLoaded', () => {
    let createDB = window.indexedDB.open('citas', 1); // Crea la base. En la versión, hay que usar números enteros.

    createDB.onerror = function() {
        console.log('Hubo un error.');
    }

    createDB.onsuccess = function() {        
        DB = createDB.result;
        mostrarCitas();
    }

    createDB.onupgradeneeded = function(e) {
        let db = e.target.result; // Instancia de la base.
        let objectStore = db.createObjectStore('citas', { ketPath: 'key', autoIncrement: true});
        // ketPath es la primary key.

        objectStore.createIndex('mascota', 'mascota', { unique: false });
        // unique indica si el valor es único o no.
        objectStore.createIndex('cliente', 'cliente', { unique: false });
        objectStore.createIndex('telefono', 'telefono', { unique: false });
        objectStore.createIndex('fecha', 'fecha', { unique: false });
        objectStore.createIndex('hora', 'hora', { unique: false });
        objectStore.createIndex('sintomas', 'sintomas', { unique: false });
    }

    form.addEventListener('submit', agregarDatos);

    function agregarDatos(e) {
        e.preventDefault();

        const nuevaCita = {
            mascota: nombreMascota.value,
            cliente: nombreCliente.value,
            telefono: telefono.value,
            fecha: fecha.value,
            hora: hora.value,
            sintomas: sintomas.value,

        }
        
        let transaction = DB.transaction(['citas'], 'readwrite'); // Hay dos métodos: Read only y read-write.
        let objectStore = transaction.objectStore('citas');
        let peticion = objectStore.add(nuevaCita);
        
        peticion.onsuccess = () => {
            form.reset();
        }

        transaction.oncomplete = () => {
            console.log('Cita agregada.');
            mostrarCitas();
        }

        transaction.onerror = () => {
            console.log('Ha ocurrido un error.');
        }
    }

    function mostrarCitas() {
        while(citas.firstChild) {
            citas.removeChild(citas.firstChild);
        }

        let objectStore = DB.transaction('citas').objectStore('citas');
        objectStore.openCursor().onsuccess = function(e) {
            e.preventDefault();

            let cursor = e.target.result;

            if(cursor) {
                let citaHTML = document.createElement('li');
                const btnBorrar = document.createElement('button');

                citaHTML.setAttribute('data-cita-id', cursor.key);
                citaHTML.classList.add('list-group-item');

                btnBorrar.classList.add('borrar', 'btn', 'btn-danger');
                btnBorrar.innerHTML = '<span aria-hidden="true">x</span> Borrar';
                btnBorrar.onclick = borrarCita;

                citaHTML.innerHTML = `
                    <p class="font-weight-bold">Mascota: <span class="font-weight-normal">${ cursor.value.mascota }</span></p>
                    <p class="font-weight-bold">Cliente: <span class="font-weight-normal">${ cursor.value.cliente }</span></p>
                    <p class="font-weight-bold">Teléfono: <span class="font-weight-normal">${ cursor.value.telefono }</span></p>
                    <p class="font-weight-bold">Fecha: <span class="font-weight-normal">${ cursor.value.fecha }</span></p>
                    <p class="font-weight-bold">Hora: <span class="font-weight-normal">${ cursor.value.hora }</span></p>
                    <p class="font-weight-bold">Síntomas: <span class="font-weight-normal">${ cursor.value.sintomas }</span></p>
                `;

                citaHTML.appendChild(btnBorrar);
                citas.appendChild(citaHTML);
            
                cursor.continue();
            } else {
                if(!citas.firstChild) {
                    let listado = document.createElement('p');

                    headingAdministra.textContent = 'Agregar citas';

                    listado.classList.add('text-center');
                    listado.textContent = 'No hay resultados';
                

                    citas.appendChild(listado);
                } else {
                    headingAdministra.textContent = 'Administrar citas';
                }
            }
        }
    }

    function borrarCita(e) {
        e.preventDefault();

        let citaId = Number(e.target.parentElement.getAttribute('data-cita-id'));
        console.log(citaId);
        let transaction = DB.transaction(['citas'], 'readwrite'); // Hay dos métodos: Read only y read-write.
        let objectStore = transaction.objectStore('citas');
        let peticion = objectStore.delete(citaId);

        transaction.oncomplete = () => {
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
            console.log(`Se eliminó la cita con el ID ${ citaId }.`);

            if(!citas.firstChild) {
                let listado = document.createElement('p');

                headingAdministra.textContent = 'Agregar citas';

                listado.classList.add('text-center');
                listado.textContent = 'No hay resultados';
            

                citas.appendChild(listado);
            } else {
                headingAdministra.textContent = 'Administrar citas';
            }
        }
    }
});