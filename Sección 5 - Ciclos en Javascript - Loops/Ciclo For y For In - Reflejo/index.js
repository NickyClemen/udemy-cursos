/* for in es muy utilizado para barrer cada una de las propiedades dentro de los objetos.
    for (prop in nombre del objeto) {} */
var Persona = function() {

    this.nombre = 'Nicole';
    this.apellido = 'Ordoqui';
    this.edad = 28;

}

var nicole = new Persona();

Persona.prototype.direccion = 'Santiago del Estero';

for (prop in nicole) {

    // Instrucción para excluir los prototipos del ciclo.
    if (!nicole.hasOwnProperty(prop)) {

        continue;

    } // hasOwnProperty() -> Verificar propiedades dentro de un objeto.

    console.log(prop);
    console.log(prop, nicole[prop]);

}
/* Reflejo/Reflection -> Habilidad que tienen los objetos de conocerse a sí mismos. */

// Mostrar todos los valores de un array.
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function(value) {

    console.log(value);

});