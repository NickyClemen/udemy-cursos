try {

    algo();

} catch (error) {

    console.log(error);

} finally {

    console.log('No le importa. Ejecutá de todos modos.');
    // Se ejecuta falle o no.

} // Para control de errores.

function obtenerClientes() {

    console.log('Descargando...');

    setTimeout(function() {

        console.log('Completo.');

    }, 3000);

}

obtenerClientes();