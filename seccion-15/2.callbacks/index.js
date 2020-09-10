/* Código síncrono (synchronous):
    1) Si se tiene un pragrama de dos líneas, la línea dos no puede empezar sin haber terminado la uno.
Código asíncrono (asynchronous):
    1) Se puede tener dos líneas de código, y la línea dos ejecutarse y finalizar antes que la línea uno termine de hacerlo.
    
Callbacks: Piedra angular de la programación asíncrona. Función que corre dentro de otra función para que se ejecute.
Se recomiendan que sean inline. */
/* Inline callback. Es una función que no tiene nombre (anónima).
const ciudades = ['Londres', 'New York', 'Madrid', 'París', 'Viena'];
ciudades.forEach(ciudad => {
    console.log(ciudad);
}); */

/* Con función definida.
function callback(ciudad) {
    console.log(ciudad);
}
ciudades.forEach(callback); */
const paises = [
    'Francia', 
    'España', 
    'Portugal', 
    'Australia', 
    'Inglaterra', 
    'Irlanda',
];

function nuevoPais(pais, callback) {
    setTimeout(function() {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises() {
    setTimeout(function() {
        let html = '';
        const app = document.getElementById('app');

        paises.forEach(function(pais) {
            html += `<p>${ pais }</p>`;
        });

        app.innerHTML = html;
    }, 1000);
}

mostrarPaises();
nuevoPais('Alemania', mostrarPaises);