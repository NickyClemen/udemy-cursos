function enviarMision(xmen) {
    console.log('Enviar a ' + xmen.nombre);
    xmen.regenerar('Logan');
}
function enviarCuartel(xmen) {
    console.log('Enviar a ' + xmen.nombre);
}
var wolverine = {
    nombre: 'Wolverine',
    regenerar: function (x) {
        console.log("Se ha curado " + x + ".");
    }
};
enviarMision(wolverine);
