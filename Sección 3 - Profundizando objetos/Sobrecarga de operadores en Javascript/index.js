function crearProducto(nombre, precio) {

    nombre = nombre || 'Sin nombre';
    precio = precio || '0';

    console.log('Producto: ', nombre, 'Precio: ', precio);
    
}
/* Sobre cargar de operadores: Funciones que van aumentando cantidad de parámetros.
En JS no se puede hacer, porque la última función sobreescribe la anterior. */

function crearProductoCien(nombre) {

    crearProducto(nombre, 100);

}

function crearProductoCamisa(precio) {

    crearProducto('Camisa', precio);

}

crearProducto('Lápiz');
crearProductoCien('Corrector');
crearProductoCamisa(75);