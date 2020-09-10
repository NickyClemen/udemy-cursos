const numeros = [1, 2, 3];
/* No se puede reasignar el array completo, pero si las posiciones por separado aunque
esté declarado con const.
Con let si se puede sobreescribir todo. */
numeros[0] = 4;
numeros.push(5);

console.log(numeros);