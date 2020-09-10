const txtBtn = document.getElementById('txtBtn');
const jsonBtn = document.getElementById('jsonBtn');
const apiBtn = document.getElementById('apiBTN');

eventListeners();

function eventListeners() {
    txtBtn.addEventListener('click', cargarTxt);
    jsonBtn.addEventListener('click', cargarJson);
    apiBtn.addEventListener('click', cargarRest);
}

function cargarTxt(e) {
    e.preventDefault();
    fetch('./datos.txt')
        .then(res => res.text()) // El primer then funciona como una conexión.
        .then(data => {
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = data
        })
        .catch(err => console.log(err.message));
}

function cargarJson(e) {
    e.preventDefault();
    fetch('./empleados.json')
        .then(res => res.json())
        .then(data => {
            const resultado = document.getElementById('resultado');
            let htmlTemplate = data.map(data => {
                return `<li>${ data.nombre } ${ data.puesto }</li>`;
            });
            resultado.innerHTML = htmlTemplate;
           
        })
        .catch(err => console.error(err.message));

}

function cargarRest(e) {
    e.preventDefault();
    const URL = 'https://picsum.photos/list';
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            const resultado = document.getElementById('resultado');
            let htmlTemplate = data.map(data => {
                return `<li><a target="_blank" href="${ data.post_url }">Ver imagen</a>
                        ${ data.author }</li>
                `;
            });
            resultado.innerHTML = htmlTemplate;
        })
        .catch(err => console.error(err.message));
}