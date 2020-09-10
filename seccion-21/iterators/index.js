/* Iterators: Ayudan a la flexibilidad y control sobre código. Permiten ir paso a paso al hacer recorridos. */
const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());

function crearIterador(carrito) {
    let i = 0;

    return {
        siguiente: () => {
            let fin = (i >= carrito.length);
            let valor = !fin ? carrito[i++] : undefined;

            return {
                fin: fin,
                valor: valor,
            }
        }
    }
}

