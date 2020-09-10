const esperando = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('Se ejecutó'), 5000);
});

const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;

    if(descuento) {
        resolve('Descuento aplicado.');
    } else { 
        reject(new Error('No se pudo aplicar el descuento.'));
    }
});

esperando
    .then((message) => console.log(message))
    .catch(error => console.log(error.message));

aplicarDescuento
    .then(message => console.log(message))
    .catch(error => console.error(error.message));