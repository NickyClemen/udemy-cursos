// forEach.
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Aprender'];

pendientes.forEach(function(pendiente, index) {
// Se recomienda usar el nombre del array en singular como parámetro.

    console.log(`${ index } ${ pendiente }`);

});

// Map.
const carrito = [

    {

        id: 1, 
        producto: 'Libro',

    },
    {

        id: 2, 
        producto: 'Camisa',

    },
    {

        id: 3, 
        producto: 'Guitarra',

    },
    {

        id: 4, 
        producto: 'Disco',

    },
    
];

const nombreProducto = carrito.map(function(carrito) {

    return carrito.producto;

});

console.log(nombreProducto);
/* El map, a diferencia del for o el forEach, no almaneca ni extrae información. */

// Imprimir un objeto con for.
const auto = {

    modelo: 'Sierra',
    motor: 6.1,
    anio: 2019,
    marca: 'Ford',

}

for (let car in auto) {

    console.log(`${ car }: ${ auto[car] }`);

}