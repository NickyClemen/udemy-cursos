/* Función que retorna un string que representa una función o un objeto. */
function sumar(a, b) {
    return a + b;
}

function Automovil(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}

const auto = new Automovil('Camaro', 'Negro');

// Para usar toString en un objeto, hay que modificarlo en el prototype.
Automovil.prototype.toString = function autoString() {
    const datos = `Auto: ${ this.modelo }. Color: ${ this.color }`;
    return datos;
}

console.log(sumar.toString());
console.log(auto.toString());