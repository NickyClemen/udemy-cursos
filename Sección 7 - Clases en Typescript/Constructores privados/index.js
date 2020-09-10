// Crear una sola instancia de una clase.
var Apocalypsis = /** @class */ (function () {
    function Apocalypsis(nombre) {
        this.nombre = nombre;
    } /* Un constructor privado puede ser llamado solamente dentro de la clase, por lo que no se
    puede instanciar. */
    Apocalypsis.getInstance = function () {
        if (!Apocalypsis.instancia) {
            Apocalypsis.instancia = new Apocalypsis('Apocalypsis now');
        }
        return Apocalypsis.instancia;
    }; // Permite retornar una única instancia del objeto.
    return Apocalypsis;
}());
// let apocalypsis:Apocalypsis = new Apocalypsis('Apocalypsis');
var apocalypsis = Apocalypsis.getInstance();
console.log(apocalypsis);
