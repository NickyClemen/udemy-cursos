/* Namespace: Evita que ocurran colisiones entre nombres en el global object. La idea es crear un global object
a lo largo de otra la aplicación, y agregar funciones todas las funciones y objetos en un solo lugar. */
const restaurApp = {};

restaurApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25,

    },
    {
        platillo: 'Hamburguesa',
        precio: 20,

    },
    {
        platillo: 'Pancho',
        precio: 15,

    },
];

restaurApp.funciones = {
    ordenar: id => console.log(`Tu comida ${ restaurApp.platillos[id].platillo } está en preparación.`),
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio,
        }
        restaurApp.platillos.push(nuevo);
    },
    mostrarMenu: platillos => {
        console.log(`Bienvenido a nuestro menú.`);
        platillos.forEach((platillo, index) => {
            console.log(`${ index }: ${ platillo.platillo }. Su precio es de $${ platillo.precio }.`);
        });
    }
}

const { platillos } = restaurApp;

restaurApp.funciones.ordenar(2);
restaurApp.funciones.agregarPlatillo('Tarta', 15);
restaurApp.funciones.mostrarMenu(platillos);
