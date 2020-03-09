"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function parametro(target, metodo, index) {
    console.log(target, metodo, index);
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano.prototype.imprimir = function (plan, mensaje) {
        if (plan) {
            console.log("El plan es " + mensaje + ".");
        }
        else {
            console.log(mensaje);
        }
    };
    __decorate([
        __param(1, parametro)
    ], Villano.prototype, "imprimir", null);
    return Villano;
}());
var lex = new Villano('Lex Luthor');
lex.imprimir(false, 'conquistar el mundo');
/* Los decoradores de parámetros pueden servir para obtener información de los parámetros
que se están pasando en los métodos.
Reciben como parámetros:
  1) Target: Función.
  2) Nombre.
  3) Index: La posición del parámetro en la lista de argumentos. */
