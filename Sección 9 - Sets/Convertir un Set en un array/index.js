let numeros = [1, 2, 3, 4, 5, 6, 7, 7, 7 ];
let setNumeros = new Set(numeros);

// Convertir un Set en un array.
// let arrayNumeros = [...setNumeros];
let arrayNumeros = eliminaDuplicados(setNumeros);
// Se utiliza el operador spread.

function eliminaDuplicados(items) {

    // let set = new Set(items);

    return [...new Set(items)];

}

console.log(setNumeros);
console.log(arrayNumeros);

