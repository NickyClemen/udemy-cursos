const URL = 'http://localhost:4000/pacientes';

async function fetchData(url) {
    const fetchData = await fetch(url);
    let response = await fetchData.json();
    
    return response;
}

function mostrarCitas(citas) {
    const contenedorCitas = document.querySelector('#citas');
    let citasHTML = '';

    citas.forEach(cita => {
        citasHTML += `
            <div class="p-5 list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between mb-4">
                    <h3 class="mb-3">${ cita.nombre }</h3>
                    <small class="fecha-alta">${ cita.fecha } - ${ cita.hora }</small>
                </div>

                <p class="mb-0">${ cita.sintomas }</p>

                <div class="contacto py-3">
                    <p>Dueño: ${ cita.propietario }</p>
                    <p>Teléfono: ${ cita.telefono }</p>
                </div>
            </div>
        `;
    });

    contenedorCitas.innerHTML = citasHTML;
}

fetchData(URL)
    .then(response => mostrarCitas(response))
    .catch(reject => console.error(reject.message));
