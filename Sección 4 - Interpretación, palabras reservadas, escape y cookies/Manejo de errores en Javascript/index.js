// Primer manejador de errores.
try {

    throw 1; // Cualquier número. 
    /* throw function() {

        console.log('Función del throw.');

    }
    throw {

        nombreError: 'Error tipo uno.',
        accion: 'Apagar el servidor.',
        codeError: 1,

    }
    throw new Error('Error tipo uno.');
    Se puede retornar lo que sea con el throw, y todo es renombrado en la función e.
    Es como invocar el catch. 
    Cuidado de poner un throw en el cuerpo del programa, que puede bloquear el flujo de
    ejecución. No afecta a otros archivos. */

    console.log('Ésta parte nunca se ejecuta.');
    /* var a = 100; 

    if (a === 100) {

        throw 'Error...'

    } else {

        throw 'Ha ocurrido un error.';
        // Disparar un error (forzar el catch).

    }    

    console.log('El valor de A es de ' + a + '.'); */

} catch (e) {

    registroError(e);
    /* e();
    console.log(e);
    console.log(e.nombreError);
    console.log(e.accion);
    console.log(e.codeError); */
    console.log('Parte del catch.');
    // console.log(e.message);
    /* Detalla el error. 
    e.message deja solament el mensaje de error. */

} finally {

    console.log('Finamente.');

} /* El catch es opcional, pero si no se lo pone, va el finally a la fuerza.
El try necesita sí o sí un catch o un finally. */

function registroError(e) {

    var ahora = new Date();

    console.log('Se ha registrado un error ', e, ' a las ', ahora.getTime());
    // Almanenar el error.

}