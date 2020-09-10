/* Generator: Función que retorna un iterador. Se puede retornar cualquier tipo de dato primitivo. */
function* crearGenerador() {
    yield 1;
    yield 'Nombre';
    yield (3 + 3);
    yield true;
}

function* nuevoGenerador(carrito) {
    for(let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];
const iterador = crearGenerador();
let iterator = nuevoGenerador(carrito);

console.log(iterador.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done); // Señala si se está en el final del iterador. Tener cuidado.
