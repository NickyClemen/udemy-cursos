const txtBtn = document.getElementById('txtBtn');

eventListeners();

function eventListeners() {
    txtBtn.addEventListener('click', cargarTxt);
}

function cargarTxt() {
    fetch('./datos.txt')
        .then(res => res.text()) // El primer then funciona como una conexión.
        .then(data => {
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = data
        })
        .catch(err => console.log(err.message));
}