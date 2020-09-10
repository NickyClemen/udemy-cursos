"use strict";
exports.__esModule = true;
var MENSAJES = [
    "El texto es muy corto",
    "El texto es muy largo",
];
function obtenerError(numError) {
    if (numError > MENSAJES.length) {
        return 'El código no existe.';
    }
    return MENSAJES[numError];
}
exports.obtenerError = obtenerError;
