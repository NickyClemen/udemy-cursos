const listaTweet = document.querySelector('#lista-tweets');

eventListeners();

function eventListeners() {

    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
    // Submit es el evento de formulario para envíos.

}

function agregarTweet(e) {

    e.preventDefault();
    const tweet = document.querySelector('#tweet').value;
    const botonBorrar = document.createElement('a');
    const li = document.createElement('li');

    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    li.innerText = tweet;
    li.appendChild(botonBorrar);
    listaTweet.appendChild(li);

}