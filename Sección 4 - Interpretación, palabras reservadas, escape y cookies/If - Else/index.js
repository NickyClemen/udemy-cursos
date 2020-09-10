var a = 10;
var b = 20;

// Versiones cortas del IF.
// Operador ternario.
var c = (a > b) ? a : b;
var d = (a > b) ? function() {

    return a;

}() : function() {

    return b;

}()

var e = 20;
var f = undefined;
var g = e || f;
// Toma el valor del que no sea undefined. Es muy útil con funciones que esperan parámetros.

function getNombre(nombre) {

    var nom = nombre || '<sin nombre>' || '<sin apellido>';
    // Evalúa hasta encontrar un valor válido.

    console.log(nom);

}

console.log(g);
getNombre();