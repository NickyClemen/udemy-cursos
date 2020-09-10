const btnPrimary = document.getElementById('boton1');
const btnSecondary = document.getElementById('boton2');

eventListeners();

function eventListeners() {
    btnPrimary.addEventListener('click', clickEmpleado);
    btnSecondary.addEventListener('click', clickEmpleados);
}

function clickEmpleado(e) {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.open('GET', './empleado.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const persona = JSON.parse(this.responseText); // Convierte el JSON en un objeto.
            const empleado = document.getElementById('empleado');
            const htmlTemplate = `
                <ul>
                    <li>ID: ${ persona.id }</li>
                    <li>Nombre: ${ persona.nombre }</li>
                    <li>Empresa: ${ persona.empresa }</li>
                    <li>Actividades: ${ persona.trabajo }</li>
                </ul>
            `;

            empleado.innerHTML = htmlTemplate;
        }
    }

    xhr.send();
}

function clickEmpleados(e) {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    // Hay que abrir una conexión nueva cada vez que se quiera hacer una petición.

    xhr.open('GET', './empleados.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const personal = JSON.parse(this.responseText); // Convierte el JSON en un objeto.
            const empleados = document.getElementById('empleados');
            let htmlTemplate = '';

            console.log(personal);

            personal.forEach(persona => {
                htmlTemplate += `
                    <ul>
                        <li>ID: ${ persona.id }</li>
                        <li>Nombre: ${ persona.nombre }</li>
                        <li>Empresa: ${ persona.empresa }</li>
                        <li>Actividades: ${ persona.trabajo }</li>
                    </ul>
                `;
            });

            empleados.innerHTML = htmlTemplate;
        }
    }

    xhr.send();
}