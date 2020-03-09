class Persona {

    constructor(nombre) {

        this.nombre = nombre;

    } // Si se retira el constructor, la clase retorna undefined.

    decirNombre() {

        console.log(this.nombre);

    }

}

let nicole = new Persona('Nicole');
nicole.decirNombre();

console.log(nicole);

// Validaciones.
console.log(nicole instanceof Persona);
console.log(nicole instanceof Object);
console.log(typeof Persona);
console.log(typeof Persona.prototype.decirNombre);