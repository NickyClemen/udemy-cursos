var PI = Math.PI;
var E = Math.E;
var numUno = 10.456789;

// Redondear números.
console.log(Math.round(numUno * 100) / 100);
/* Recibe como parámetro, el número que se quiere redondear. Para obtener la cantidad de decimales,
se lo multiplica por múltiplos de diez, y se lo divide por el mismo múltiplo. */

// Retornar el valor entero de un número.
console.log(Math.floor(numUno));

// Random.
console.log(Math.random());
/* Genera números aleatorios cercanos a cero o uno. */
function randomEntre(min, max) {

    return Math.floor(Math.random() * ((max - min) + 1) + min);

}

// Raíz cuadrada.
console.log(Math.sqrt(10));

// Exponente.
console.log(Math.pow(7, 2));
/* El primer parámetro, es la base; el segundo, el exponente. */

console.log(randomEntre(1, 6));
console.log(PI);
console.log(E);
