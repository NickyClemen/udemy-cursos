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
var Mutantes = /** @class */ (function () {
    /* Clases abstractas. Esa palabra reservada evita que se creen instancias de una clase.
    No se puede crear una instancia de una clase abstracta.
    Sirven para crear un 'molde' de clase, y heredarle las propiedades y métodos a otras. */
    function Mutantes(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    return Mutantes;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Xmen;
}(Mutantes));
var cyclops = new Xmen('Cyclops', 'Scott Summers');
