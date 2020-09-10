var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function editable(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        if (!esEditable) {
            console.log('No lo intentes más, Superman.');
        }
        descriptor.writable = esEditable;
    };
}
/* Diferencia entre un factory decorator, de clase y de método: Los argumentos que reciben.
Los decoradores de métodos tienen que retornar una función, la cuál recibe tres argumentos:
  1) Target: Tipo de función que se quiere sobreescribir.
  2) Nombre de la propiedad.
  3) PropertyDescriptor: Modifica o añade una propiedad. */
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano.prototype.plan = function () {
        console.log('El plan es matar a Superman.');
    };
    __decorate([
        editable(false)
    ], Villano.prototype, "plan", null);
    return Villano;
}());
var lex = new Villano('Lex Luthor');
lex.plan = function () {
    console.log('Quedarse en la oficina.');
};
lex.plan();
