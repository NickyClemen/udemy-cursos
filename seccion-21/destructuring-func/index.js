function reservacion(completo, { metodoPago = 'efectivo', cantidad = 0, dias = 0 } = {}) {
    /* ES5.
    opciones = opciones || {};

    let metodo = opciones.metodoPago;
    let cantidad = opciones.cantidad;
    let dias = opciones.dias; */

    // ES6.
    // let { metodoPago, cantidad, dias } = opciones;

    console.log(metodoPago);
    console.log(cantidad);
    console.log(dias);
}

reservacion(true, { metodoPago:'tarjeta', cantidad: 2000, dias: 3 });
reservacion(false, {  });