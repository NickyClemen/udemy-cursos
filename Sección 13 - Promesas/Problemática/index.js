/* Javascript siempre fue síncrono, aunque haya tareas que se ejecutan en segundo plano 
(siempre fue secuencial). */

function tareaAsincrona() {

    setTimeout(function() {

        console.log('Proceso ejecutado.');
        resolve();

    }, 1300);

}
tareaAsincrona();

console.log('Código secuencial.');

// Verificar salud del código.
function resolve() {

    console.log('Todo ok.');

}

function reject() {

    console.log('Todo mal.');

}