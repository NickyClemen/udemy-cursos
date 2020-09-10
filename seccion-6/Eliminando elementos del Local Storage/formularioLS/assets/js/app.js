const listaTweet = document.querySelector('#lista-tweets');

eventListeners();

function eventListeners() {

    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    listaTweet.addEventListener('click', borrarTweet);

    document.addEventListener('DOMContentLoaded', localStorageListo);
    // Evento que se dispara cuando el DOM termina de renderizarse.

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

    agregarTweetLocalStorage(tweet);

}

function borrarTweet(e) {

    e.preventDefault();

    if(e.target.className === 'borrar-tweet') {

        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);

    }

}

function localStorageListo() {

    let tweets;
    tweets = obtenerTweetsLocalStorage();
    tweets.forEach((tweet) => {

        const botonBorrar = document.createElement('a');
        const li = document.createElement('li');

        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        li.innerText = tweet;
        li.appendChild(botonBorrar);

        listaTweet.appendChild(li);

    });

}

function agregarTweetLocalStorage(tweet) {

    let tweets;
    tweets = obtenerTweetsLocalStorage();
    tweets.push(tweet);

    localStorage.setItem('tweets', JSON.stringify(tweets))
    
}

function obtenerTweetsLocalStorage() {

    let tweets;

    if(localStorage.getItem('tweets') === null) {

        tweets = [];

    } else {

        tweets = JSON.parse(localStorage.getItem('tweets'));

    }

    return tweets;

}

function borrarTweetLocalStorage(tweet) {

    let tweets, tweetBorrar;

    tweetBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();
    tweets.forEach((tweet, index) => {

        if(tweetBorrar === tweet) {

            tweets.splice(index, 1);

        }

    });

    localStorage.setItem('tweets', JSON.stringify(tweets));

}

