// Hay veces que ni el '===' puede decir con exactitud si un objeto es igual a otro.
console.log(+0 == -0);
console.log(+0 === -0);
// Matemáticamente, son iguales, pero computacionalmente no lo son.

console.log(Object.is(+0, -0));
// Recibe dos parámetros. Se puede usar cuando se quiere hacer una comparación minuciosa.

console.log('===============');

console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

console.log('===============');

console.log(5 == 5);
console.log(5 === '5');

console.log('===============');

console.log(Object.is(5, 5));
console.log(Object.is(5, '5'));