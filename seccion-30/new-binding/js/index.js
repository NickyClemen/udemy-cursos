/* New binding: Asignación a los atributos por el constructor de la clase. */

function Automovil(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}

const auto = new Automovil('Camaro', 'negro');
console.log(auto);
