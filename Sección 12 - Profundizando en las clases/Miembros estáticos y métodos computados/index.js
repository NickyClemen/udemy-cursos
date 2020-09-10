/* Propiedades computadas: No es más que tener una variable con un string. Se anidan en el 
onjeto igual que una propiedad computada. */
let nombreMetodo = 'gritarNombre';

class Persona {

    constructor(nombre) {

        this.nombre = nombre;

    }
    
    decirNombre() {

        console.log(this.nombre);

    } /* Métodos estáticos: Es un método que nos va a permitir ejecutar alguna función sin instanciar
    la clase. No tenemos que inicializar una variable pra llamar a esa función. 
    Funcionan sólo para llamarlos fuera de la clase. */

    [nombreMetodo]() {

        console.log(this.nombre.toUpperCase());

    }

    static crear(nombre) {

        return new Persona(nombre);

    }
    // Es importante que sean autónomos, y no requieran de propiedades de la clase.

}

let nicole = Persona.crear('Nicole');

console.log(nicole);