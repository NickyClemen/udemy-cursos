/* ES5.
var funciones = [];

for (var i = 0; i < 10; i++) {

    // funciones.push(function() { console.log(i) });
    funciones.push(

        (function(valor) {

            return function() {

                console.log(valor);

            }

        })(i)

    );

}

funciones.forEach(function(func) {

    func();

});
Al estar usando var, i es una variable compartida con todo el scope, por lo que mantienen la
relación. */

// ES6.
var funciones = [];

for (let i = 0; i < 10; i++) {

    funciones.push(function() { console.log(i) });

}

funciones.forEach(function(func) {

    func();

});
/* Por cada iteración, let crea una nueva instancia de la variable i distinta e independiente. */

