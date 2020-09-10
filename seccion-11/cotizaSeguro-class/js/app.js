const selectAnio = document.getElementById('anio');
const formulario = document.getElementById('cotizar-seguro');
const max = new Date().getFullYear();
const min = max - 20;

class Seguro {
    constructor(marca, anio, tipo) {
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;
    }

    cotizarSeguro() {
        let cantidad;
        const base = 2000;
    
        switch(this.marca) {
            case '1': 
                cantidad = base * 1.15;
                break;
            case '2': 
                cantidad = base * 1.05;
                break;
            case '3': 
                cantidad = base * 1.35;
                break;
    
        }
    
        const diferencia = new Date().getFullYear() - this.anio;
        cantidad -= ((diferencia * 3) * cantidad) / 100;
    
        (this.tipo === 'basico') ? cantidad *= 1.30 : cantidad *= 1.5;    
        
        return cantidad;
    }
}

class Interface {
    mostrarMensaje(mensaje, tipo) {
        const div = document.createElement('div');
    
        if(tipo === 'error') {
            div.classList.add('mensaje', 'error');
        } else {
            div.classList.add('mensaje', 'correcto');
        }
    
        div.innerHTML = `${ mensaje }`;
        formulario.insertBefore(div, document.querySelector('.form-group'));
        // Dos parámetros: Elemento que se quiere insertar, y antés de cuál.
    
        setTimeout(function() {
            document.querySelector('.mensaje').remove();
        }, 3000)
    }
    
    mostrarResultado(seguro, total) {
        const resultado = document.getElementById('resultado');
        const div = document.createElement('div');
        const spinner = document.querySelector('#cargando img');
        let marca;
    
        switch(seguro.marca) {
            case '1':
                marca = 'Americano';
                break;
            case '2':
                marca = 'Asiático';
                break;
            case '3':
                marca = 'Europeo';
                break;
    
        }
    
        div.innerHTML = `
            <p class="header">Tu resumen:</p>
            <p>Marca: ${ marca }</p>
            <p>Año: ${ seguro.anio }</p>
            <p>Tipo de seguro: ${ seguro.tipo }</p>
            <p>Total: ${ total }</p>
        `;
    
        spinner.style.display = 'block';
    
        setTimeout(function() {
            spinner.style.display = 'none';
            resultado.appendChild(div);
        }, 3000);
    }
}

eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', enviarDatos);
}

function enviarDatos(e) {
    const marca = document.getElementById('marca');
    const selectedMarca = marca.options[marca.selectedIndex].value;
    const anio = document.getElementById('anio');
    const selectedAnio = anio.options[anio.selectedIndex].value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const interfaz = new Interface();
    
    e.preventDefault();

    if(selectedMarca === '' || selectedAnio === '' || tipo === '') {
        interfaz.mostrarMensaje('Faltan datos. Completa los campos e intenta de nuevo.', 'error');
    } else {
        const resultado = document.querySelector('#resultado div');
        const seguro = new Seguro(selectedMarca, selectedAnio, tipo);
        const cantidad = seguro.cotizarSeguro();

        if(resultado != null) {
            resultado.remove();
        }

        interfaz.mostrarMensaje('Cotizando...', 'correcto');
        interfaz.mostrarResultado(seguro, cantidad);
    }
}

for(let i = max; i >= min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnio.appendChild(option);
}