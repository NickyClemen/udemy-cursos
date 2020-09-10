const formulario = document.getElementById('generar-nombre');

eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', cargarNombres);
}

function cargarNombres(e) {
    e.preventDefault();

    let URL = 'https://uinames.com/api/?';

    const origen = document.getElementById('origen');
    const origenSelected = origen.options[origen.selectedIndex].value;
    const genero = document.getElementById('genero');
    const generoSelected = genero.options[genero.selectedIndex].value;
    const cantidad = document.getElementById('numero').value;

    if(origenSelected !== '') {
        URL += `region=${ origenSelected }&`;
    }

    if(generoSelected !== '') {
        URL += `gender=${ generoSelected }&`;
    }

    if(cantidad !== '') {
        URL += `amount=${ cantidad }&`;
    }

    consultaFetch(URL);
}

function consultaFetch(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const resultado = document.getElementById('resultado');
            let htmlTemplate = `
                <h2>Nombres generados</h2>
                ${ data.map(nombre => {
                    return `<ul class="lista"><li>${ nombre.name }</li></ul>`;
            }) }`;
        
            resultado.innerHTML = htmlTemplate;
        })
        .catch(err => console.log(err.message));
}