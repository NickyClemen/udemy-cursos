var restar = (a, b) => a - b;

// Saber qué tipo de función es.
console.log(typeof restar);
console.log(restar instanceof Function);

/* No se puede definir new en una arrow function.
var restarDos = new restar(1, 2); */

// No tienen arguments.
function ejemplo(x, y) {

    ((a, b) => {

        console.log(arguments[0]);
        // Da el error porque arguments no está definida en ninguna función ni en el objeto global.
    
    })();
    // Al estar dentro del scope de una función (contextualizar), arguments busca los valores dentro de la función.

}

ejemplo(10, 20);

