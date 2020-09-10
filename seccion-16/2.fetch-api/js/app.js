const txtBtn = document.getElementById('txtBtn');
const jsonBtn = document.getElementById('jsonBtn');

eventListeners();

function eventListeners() {
    txtBtn.addEventListener('click', cargarTxt);
    jsonBtn.addEventListener('click', cargarJson);
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
                return `<ul>
                            <li>${ data.nombre } ${ data.puesto }</li>
                        </ul>`;
            });
            resultado.innerHTML = htmlTemplate;
           
        })
        .catch(err => console.error(err.message));

}