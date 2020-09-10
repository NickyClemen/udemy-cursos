/* Module: Patrón de diseño dominante en JS. Forma de crear variables públicas y privadas en los objetos.
La mejor manera de encapsular el código es con funciones IIFE (funciones que se ejecutan inmediatamente). */
const comprarEntrada = (function() {
    let event = 'Conferencia JS 2020';
    let precio = 200;
    const adquirirEntrada = () => {
        const div = document.querySelector('#app');
        const elemento = document.createElement('p');
        elemento.textContent = `Comprando entrada para ${ event }.`;
        div.appendChild(elemento);
    }

    // Lo que esté dentro del return, se pueden considerar variables públicas.
    return {
        mostrarEntrada: function() {
            // return event;
            adquirirEntrada();
        },
        mostrarPrecio: function() {
            return precio;
        }
    }
})();

console.log(comprarEntrada.mostrarEntrada(), comprarEntrada.mostrarPrecio());