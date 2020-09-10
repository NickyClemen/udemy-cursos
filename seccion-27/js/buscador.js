import { autosArr } from './autos.js';

// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;
const autos = obtenerAutos();
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

let datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function obtenerAutos() {
    return autosArr;
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
});

marca.addEventListener('input', e => {
    e.preventDefault();
    
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener('input', e => {
    e.preventDefault();
    
    datosBusqueda.year = Number(e.target.value);

    filtrarAuto();
});

minimo.addEventListener('input', e => {
    e.preventDefault();
    
    datosBusqueda.minimo = Number(e.target.value);

    filtrarAuto();
});

maximo.addEventListener('input', e => {
    e.preventDefault();
    
    datosBusqueda.maximo = Number(e.target.value);

    filtrarAuto();
});

puertas.addEventListener('input', e => {
    e.preventDefault();
    
    datosBusqueda.puertas = Number(e.target.value);

    filtrarAuto();
});

transmision.addEventListener('input', e => {
    e.preventDefault();
    
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
});

color.addEventListener('input', e => {
    e.preventDefault();
    
    datosBusqueda.color = e.target.value;

    filtrarAuto();
});

function limpiarHTML() {
    const contenedor = document.getElementById('resultado');

    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

function mostrarAutos(autos) {
    limpiarHTML();

    const contenedor = document.getElementById('resultado');

    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
            <p>${ auto.marca } ${ auto.modelo } - ${ auto.year } - Puertas: ${ auto.puertas } - Transmisión: ${ auto.transmision } - Precio: ${ auto.precio } - Color: ${ auto.color }</p>
        `;

        contenedor.appendChild(autoHTML);
    }); 
}

function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    const resultado = document.getElementById('resultado');

    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No se han encontrado resultados'));

    resultado.appendChild(noResultado);
}

function filtrarAuto() {
    const resultado = obtenerAutos()
        .filter(filtrarMarca)
        .filter(filtrarYear)
        .filter(filtrarMinimo)
        .filter(filtrarMaximo)
        .filter(filtrarPuertas)
        .filter(filtrarTransmision)
        .filter(filtrarColor);
    
    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function filtrarMarca(auto) {
    if(datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    } else {
        return auto;
    }
}

function filtrarYear(auto) {
    if(datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
    } else {
        return auto;
    }
}

function filtrarMinimo(auto) {
    if(datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo;
    } else {
        return auto;
    }
}

function filtrarMaximo(auto) {
    if(datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo;
    } else {
        return auto;
    }
}

function filtrarPuertas(auto) {
    if(datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas;
    } else {
        return auto;
    }
}

function filtrarTransmision(auto) {
    if(datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    } else {
        return auto;
    }
}

function filtrarColor(auto) {
    if(datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    } else {
        return auto;
    }
}