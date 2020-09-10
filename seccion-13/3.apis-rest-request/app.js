/* API (Application Programming Interface): 
    1) Funciones o métodos que ofrece una librería para ser utilizada por otro software como una capa de abstracción.
    2) Para acceder al servicio, hay que enviar una petición estructurada.
    Ejemplo: Google Maps API.

REST (Representational State Transfer) API: 
    1) Puede ser diseñada en cualquier lenguaje.
    2) Se puede acceder desde cualquier lenguaje.
    3) Describe como deben ponerse a disposición los recursos. 
    4) Debe responder a los request de HTTP: 
        a) GET.
        b) POST.
        c) PUT.
        d) PATCH.
        e) DELETE. 
    5) Cada API tiene sus propias reglas, métodos y estructuras.
    
REST API Endpoints y Request
    1) Una REST API cuenta con Endpoints (URLs) para hacer operaciones CRUD. 
    Define como deben ser las URLs. */
const cargarPosts = document.querySelector('#cargar');

eventListeners();

function eventListeners() {
    cargarPosts.addEventListener('click', cargarApi);
}

function cargarApi(e) {
    e.preventDefault();
    
    const xhr = new XMLHttpRequest;
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    const listado = document.getElementById('listado');
    let contenido = '';

    xhr.open('GET', URL, true);

    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            response.forEach(post => {
                contenido += `
                    <h3>${ post.title }</h3>
                    <p>${ post.body }</p>
                `;
            });

            listado.innerHTML = contenido;
        }
    }

    xhr.send();
}
