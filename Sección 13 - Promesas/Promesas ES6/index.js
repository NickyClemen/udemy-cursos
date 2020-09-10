function tareaAsincrona() {

    // Declarar una promesa.
    let promesa  = new Promise((resolve, reject) => {

        setTimeout(function() {

            console.log('Proceso ejecutado.');
            resolve();
     
        }, 1300);

    }); /* Acepta dos parámetros:
        1) Función que se ejecuta si sale todo bien.
        2) Cuando algo falla. */

    return promesa;
}
tareaAsincrona().then(function() {

    console.log('Todo ok.');

}, function() {

    console.error('Todo mal.');

});
/* .then(); si quiero que se ejecute una acción cuando se termine de procesar la promesa.
El then() es como si se estuviese trabajando con el resolve, reject.
El reject es opcional (se puede dejar el resolve). */

console.log('Código secuencial.');

