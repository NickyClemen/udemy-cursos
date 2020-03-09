var Avenger = /** @class */ (function () {
    function Avenger(nombre) {
        this._nombre = nombre;
    }
    Object.defineProperty(Avenger.prototype, "nombre", {
        get: function () {
            if (this._nombre) {
                return this._nombre;
            }
            else {
                return "No hay par\u00E1metros.";
            }
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Avenger;
}());
var cyclops = new Avenger('Jean Gray');
cyclops.nombre = 'Cyclops';
console.log(cyclops.nombre);
