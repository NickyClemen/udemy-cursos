/* Set: Permite crer una lista de valores. Similar a un array, solamente que no va a tener duplicados.
Se pueden iterar.
No tienen llave (la llave es el mismo valor). */
let carrito = new Set();
// Convertir en array.
const arrCarrito = [...carrito];
// Se puede inicializar pasándole los datos en un array.
let numeros = new Set([1, 2, 3, 4, 5, 6, 7]);

// Agregar.
carrito.add('Camisa');
carrito.add('Pantalón');
carrito.add('Pollera');
carrito.add('Zapatos');

// Recorrer el set.
carrito.forEach((producto, index) => console.log(`${ index } - ${ producto }`));

console.log(carrito);
console.log(numeros);
console.log(arrCarrito);

// Leer el tamaño.
console.log(carrito.size);
// Comprobar que un valor exista.
console.log(carrito.has('Guitarra'));
// Borrar un valor del set.
carrito.delete('Camisa');
// Limpia todos los elementos que contenga.   
carrito.clear();
