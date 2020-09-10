/* Con la palabra reservada new, lo que se hace es crear un objeto vacìo.
Hay que especificarle de què tipo es el objeto vacìo que se va a crear.
Dentro del objeto se pueden meter métodos y propiedades. */
function Persona(nombre, apellido) {

    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = 28,

    this.nombreCompleto = function() {

        return this.nombre + ' ' +  this.apellido;

    }

    console.log('Paso por aquí.');

}

var nicole = new Persona('Nicole', 'Ordoqui');

console.log(nicole.nombreCompleto());