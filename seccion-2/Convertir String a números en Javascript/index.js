const numeroUno = '50';
const numeroDos = 10;
const numeroTres = 'tres';

// Convertir String a Number.
// Number().
console.log(Number(numeroUno) + numeroDos);

// parseInt()
console.log(parseInt(numeroUno) + numeroDos);

/* Cuandos se suma un String con un Number, se concatenan, pero si se los resta, hace la operación
como si fuesen dos números. */
console.log(numeroUno - numeroDos);

/* Si se hace un typeof, devuelve Number, pero cuando se hace un console.log(), devuelve NaN.
typeof detecta NaN como Number. */
console.log(typeof Number(numeroTres));
console.log(Number(numeroTres));

