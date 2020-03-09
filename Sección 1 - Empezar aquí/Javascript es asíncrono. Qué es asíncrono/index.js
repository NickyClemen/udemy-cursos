function imprimir() {

    for (var i = 0; i < 8000; i++) {

        console.log('Imprimió.');

    }

}

function presionoBoton() {

    console.log('Presiono botón.');

}

imprimir();

/* Javascript no es asíncrono. Hace todo secuencialmente. 
Cuando se presiona el botón, la función cae a una pila (stack) de funciones o procesos que esperan
a ser ejecutados. */