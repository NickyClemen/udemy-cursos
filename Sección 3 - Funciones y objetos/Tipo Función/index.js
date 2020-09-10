// Reglas para variables de tipo función.
function sumar(a, b) {
    return (a + b);
}
function saludar(nombre) {
    return "I'm " + nombre + ".";
}
function salvarMundo() {
    console.log('El mundo está a salvo.');
}
var miFunction;
// Retorna number.
var myFn;
// Retorna String.
var fn;
// Al dejar así (), la función no tiene parámetros. Retorna void.
// miFunction = 10;
miFunction = sumar;
console.log(miFunction(5, 5));
myFn = saludar;
console.log(myFn('Nicole'));
fn = salvarMundo;
console.log(fn());
