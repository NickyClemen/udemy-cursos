/* Hay dos formas de crearlas:
    const regex = new RegExp('/abc/');
    const regEx = /abc/; 
test -> Método para probar las expresiones. */
let regex;
let valor;

regex = [/0123456789/]; // Si se tiene un rango, se puede escribir [/0-9/].
valor = 1992;

// Buscar una fecha.
regex = /\d\d-\d\d-\d\d\d\d/; // \d busca números.
valor = '20-10-2018';
// Mejorar.
regex = /\d+ \D+/; // Espera que haya mas de un dígito a lo largo de toda la cadena.
// Mejorar.
regex = /\d{1,2}-d{1,2}-\d{4}/; // {} sirve para rango.
valor = '20-10-2018';

// Buscar una hora.
regex = /\d\d:\d\d/;
valor = '10:30 AM';
// Mejorar la regex de horario.
regex = /\d\d:\d\d \D\D/; // \D evalúa caracteres alfanuméricos.
valor = '10:30 AM';

// Negar la expresión.
regex = /[^0-9]/; 
valor = 1992;

// Letras o números.
regex = /\w+/; // Evalúa que los caracteres sean alfanuméricos. 
valor = 'Mensaje de prueba';

// Evaluar que sean todos números.
regex = /([0-9])\w+/; 
valor = '1234';

// Evaluar que sean mayúsculas.
regex = /([A-Z])\w+/;
valor = 'hola mundo';
valor = '1234';
valor = 'HOLA MUNDO';

// Evaluar que sean minúsculas.
regex = /([a-z])\w+/;
valor = 'hola mundo';
valor = '1234';
valor = 'HOLA MUNDO';

console.log(regex.test(valor));