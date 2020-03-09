var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avenger = /** @class */ (function () {
    function Avenger(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    Avenger.prototype.getNombre = function () {
        return this.nombre;
    };
    return Avenger;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    /* Cuando no se tiene definido un constructor en la clase hija, toma el de la clase padre.
    Los constructores de clases heredadas necesitan obligatoriamente llamar el super (se utiliza
    para llamar métodos y propiedades de la clase padre). */
    function Xmen(nombre, nombreReal) {
        return _super.call(this, nombre, nombreReal) || this;
    }
    Xmen.prototype.getNombre = function () {
        return _super.prototype.getNombre.call(this);
    };
    return Xmen;
}(Avenger));
var cyclops = new Xmen('Cyclops', 'Scott Summer'); // Definir las propiedades.
console.log(cyclops.getNombre());
