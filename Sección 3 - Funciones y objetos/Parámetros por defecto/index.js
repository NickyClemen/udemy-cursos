function fullName(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = false; }
    return (capitalizado) ? capitalizar(nombre) + " " + capitalizar(apellido) : nombre + " " + apellido + ".";
}
function capitalizar(palabra) {
    return "" + palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase();
}
/* A diferencia de un parámetro opcional, es un parámetro que la
función necesita para trabajar. No es un requirimiento. */
var nombre = fullName('dick', 'grayson', true);
console.log(nombre);
