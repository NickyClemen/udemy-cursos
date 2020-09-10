const map = new Map([ 
    ['nombre', 'Producto 1'], 
    ['precio', 20] 
]);
/* fromEntries permite crear un nuevo objeto con una serie de key-values.
Se puede hacer con maps y sets. */
const object = Object.fromEntries(map);

delete object.precio;

console.log(object);