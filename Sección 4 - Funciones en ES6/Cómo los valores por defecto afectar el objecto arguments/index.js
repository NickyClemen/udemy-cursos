/* En JS, cuando se crea una función, automáticamente se crea el objeto arguments, que lo que
contiene, es un array con todos los argumentos que se le está mandando a la función. */

/* function sumar(a, b) {

    console.log(arguments);

}

sumar(1, 2, 5, 'Nicole', { a: 'b' }); */

function sumar(a = 1, b = 2) {

    console.log(arguments);

}

sumar();
/* Los parámetros opcionales no quedan almacenados en arguments. */