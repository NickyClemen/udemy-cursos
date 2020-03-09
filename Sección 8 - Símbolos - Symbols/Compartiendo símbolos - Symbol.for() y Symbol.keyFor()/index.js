/* ES6 creó un pool con todos los symbols creados. */
let userId = Symbol.for('userId');
/* Verificar si el symbol fue creado previamente (exista), o si existe, usarlo.
    Symbol.for('nombre Symbol); */
let userIdDos = Symbol.for('userId');
// Apunta a dónde está el symbol.

/* Otra característica que tienen los symbols, sobretodo si son compartidos usando el pool identificados 
con un id, es la posibilidad de obtener ese alias que es usado. */
let id = Symbol.for('id unico');
let idDos = Symbol.for('id unico');
let idTres = Symbol('id unico');

let objeto = {};

objeto[userId] = '12345';

console.log(objeto[userId]);
console.log(userId);

console.log(userId == userIdDos);
console.log(userId === userIdDos);
console.log(Object.is(userId, userIdDos));

console.log(objeto[userIdDos]);
console.log(userIdDos);

// Recuperar un alias.
console.log(Symbol.keyFor(id));
// Se le pasa como parámetro el Symbol.
console.log(Symbol.keyFor(idDos));

console.log(id === idDos);

console.log(Symbol.keyFor(idTres));
/* Regresa undefined, porque no hay nada asociado en el pool, al estar creando un nuevo symbol. */
