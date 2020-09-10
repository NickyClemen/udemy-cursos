const presupuestoUser = prompt('¿Cuál es tu presupuesto semanal?');
const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    presupuestoRestante(cantidad = 0) {
        return this.restante -= Number(cantidad);
    }
}

class Interface {
    insertarPresupuesto(cantidad) {
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        presupuestoSpan.innerHTML = `${ cantidad }`;
        restanteSpan.innerHTML = `${ cantidad }`;
    }

    imprimirMensaje(mensaje, tipo) {
        const div = document.createElement('div');
        const primary = document.querySelector('.primario');
        div.classList.add('text-center', 'alert');

        if(tipo === 'error') {
            div.classList.add('alert-danger');
        } else {
            div.classList.add('alert-success');
        }

        div.appendChild(document.createTextNode(mensaje));

        primary.insertBefore(div, formulario);

        setTimeout(function() {
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        }, 3000);
    }

    agregarGasto(nombre, cantidad) {
        const gastosListados = document.querySelector('#gastos ul');
        const li = document.createElement('li');

        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${ nombre }:
            <span class="badge badge-primary badge-pill!">$${ cantidad } </span>
        `;

        gastosListados.appendChild(li);

    }

    presupuestoRestante(cantidad) {
        const restante = document.querySelector('span#restante');
        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);

        restante.innerHTML = `${ presupuestoRestanteUsuario }`;

        this.comprobarPresupuesto();
    }

    comprobarPresupuesto() {
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;

        if((presupuestoTotal / 4) > presupuestoRestante) {
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add('alert-danger');
        } else if((presupuestoTotal / 2) > presupuestoRestante) {
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
        }
    }
}

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', documentLoaded);
    formulario.addEventListener('submit', errorMessages);
}

function documentLoaded(e) {
    e.preventDefault();

    const ui = new Interface();

    if(presupuestoUser === null || presupuestoUser === '') {
        window.location.reload();
    } else {
        cantidadPresupuesto = new Presupuesto(presupuestoUser);
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);   
    }
}

function errorMessages(e) {
    e.preventDefault();

    const nombreGasto = document.getElementById('gasto').value;
    const cantidadGasto = document.getElementById('cantidad').value;
    const ui = new Interface();

    if(nombreGasto === '' || cantidadGasto === '') {
        ui.imprimirMensaje('Hubo un error', 'error');
    } else {
        ui.imprimirMensaje('Gasto cargado con éxito', 'correcto');
        ui.agregarGasto(nombreGasto, cantidadGasto);
        ui.presupuestoRestante(cantidadGasto);
    }
}