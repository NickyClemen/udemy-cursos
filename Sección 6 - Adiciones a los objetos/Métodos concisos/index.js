/* Los métodos concisos o simples, es una característica del ES6. */

// ES5.
var persona = {

    nombre: 'Nicole',
    getNombre: function() {

        console.log(this.nombre);

    }

}

persona.getNombre();

// ES6.
var bebe = {

    nombre: 'Cirilla',
    getNombre() {

        console.log(this.nombre);

    } // En ES6, se puede escribir directamente la función en lugar de anidarla en una propiedad.

}

bebe.getNombre();