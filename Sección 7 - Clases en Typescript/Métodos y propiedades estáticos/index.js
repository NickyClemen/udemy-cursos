var Xmen = /** @class */ (function () {
    function Xmen() {
    }
    Xmen.crearXmen = function () {
        return new Xmen();
    };
    /* Propiedades y métodos estáticos.
    Se puede llamar sin instanciar la clase. Se pueden llamar directamente desde cualquier parte
    del programa. */
    Xmen.nombre = 'Wolverine';
    return Xmen;
}());
var wolverine = Xmen.crearXmen();
console.log(Xmen.nombre);
console.log(wolverine);
