function saludo(mensaje = '¡Hola mundo!', tiempo = 1500) {

    // ES5 para simular parámetros opcionales.
    /* Opción insegura, pero práctica.
    mensaje = mensaje || 'Hola mundo.'; */
    /* Forma más segura.
    mensaje = (typeof mensaje !== 'undefined') ? mensaje : 'Hola mundo!'; */

    setTimeout(function() {

        console.log(mensaje);

    }, tiempo);
    /* Cuando un setTimeout recibe un undefined como parámetro, lo ejecutra automáticamente. */

}

/* Los parámetros opcionales pueden ser cualquier cosa. */

saludo();

/* function saludar(fn = function() { console.log('Hola mundo.'); }) {

    fn();

} */

function saludar(fn = temporal, persona = { nombre: 'Nicole' }) {

    fn();
    console.log(persona);

}

function temporal() {

    console.log('¡Hola mundo temporal!');

}

saludar();