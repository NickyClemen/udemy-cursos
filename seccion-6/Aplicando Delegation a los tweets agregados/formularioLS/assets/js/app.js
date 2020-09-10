const listaTweet = document.querySelector('#lista-tweets');

eventListeners();

function eventListeners() {

    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    listaTweet.addEventListener('click', borrarTweet);

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

function borrarTweet(e) {

    e.preventDefault();

    if(e.target.className === 'borrar-tweet') {

        e.target.parentElement.remove();

    }

}