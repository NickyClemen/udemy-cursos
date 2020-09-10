/* Las arrow function, son ideales para trabajar con las funciones pre definidas que trae JS por defecto. */

// ES5.
var array = [5, 10, 11, 2, 1, 9, 20];
var ordenado = array.sort(function(a, b) {

    return a - b;

});

console.log(ordenado);

// ES6.
let ordenadoES6 = array.sort((a, b) => a - b);
console.log(ordenadoES6);