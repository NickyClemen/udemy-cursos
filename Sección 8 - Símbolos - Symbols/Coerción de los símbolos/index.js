let id = Symbol.for('id');
let numero = 10;
let texto = '10';
let bool = true;
let notANumber = NaN;

console.log(numero + texto);
console.log(numero + notANumber);
console.log(bool + bool);
// Permite sumar booleanos porque lo convierte en su representación numérica.
// Cambio de tipo de dato.
console.log(numero + Number(texto));

// Tratar de concatenar/sumar symbols.
console.log('El símbolo es ', id);
// Transformar el símbolo en un string.
console.log('El símbolo es ' + String(id));

/* Existen de manera única. Representan una referencia, un espacio de memoria, por lo que se no se puede sumar. */