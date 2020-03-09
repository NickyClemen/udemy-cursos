/* Antes de ES6, lo que se hacía para emular clases, eran funciones de primera clase. */
// Función de primera clase.
function Persona(nombre) {

    this.nombre = nombre;

    this.gritarNombre = function() {

        console.log(this.nombre.toUpperCase());

    }

}

Persona.prototype.decirNombre = function() {

    console.log(this.nombre);

}

/* Código muy volátil. */

let nicole = new Persona('Nicole');
nicole.gritarNombre();
nicole.decirNombre();

console.log(nicole);