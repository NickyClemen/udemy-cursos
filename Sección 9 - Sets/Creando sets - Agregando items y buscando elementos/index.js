/* Los sets son como los arrays, con la diferencia de que tienen métodos nativos en su prototype, 
y no pueden tener valores duplicados. */

/* Declarar un Set.
let items = new Set(); */

/* Agregar items a un Set.
items.add(10);
items.add(11);
items.add(8);
items.add(7);
items.add('7'); */

// Se pueden agregar varios valores de manera dinámica con un array.
let items = new Set([1, 2, 3, 4, 5, 6, 7]);

// Hay un método que ayuda a ir directamente al elemento.
console.log(items.has(7));

console.log(items);
console.log(items.size);
/* Con items.size, se puede saber cuántos items tiene cargados el Set.
Si se trata de ingresar valores repetidos, los va a ignorar.
Internamente en el Set, hay un Object.is(), que compara los tipos de dato antes de ingresarlos.
Pueden albergar varios tipos de dato. */