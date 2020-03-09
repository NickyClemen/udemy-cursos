var saludo = "Hola Mundo";

// ES5. 
// Buscar si un string comienza con un parámetro pasado.
console.log(saludo.substr(0, 1) === 'H');

// Buscar si el parámetro está en el string.
console.log(saludo.indexOf('x'));
// No devuelve un booleano. Si no encuentra nada, devuelve -1. Si es verdadero, devuelve la posición.

// ES6.
console.log(saludo.startsWith('Hola'));
// Para saber si un string comienza con un parámetro pasado.

console.log(saludo.endsWith('Mundo'));
// Para saber si un string termina con un parámetro pasado.

console.log(saludo.endsWith('Mundo'));
// Para saber si un string termina con un parámetro pasado.

console.log(saludo.includes('x'));
// Buscar si el parámetro está en el string. Devuelve un boolean.

/* Se puede usar un parámetro adicional (se pueden obviar caracteres), añadiendo desde qué posición se
quiere empezar a buscar. */
console.log(saludo.startsWith('Mu', 5));

// Funciona con el endsWith(), y con el includes(), pero funciona un toque diferente.
console.log(saludo.includes('a', 5));