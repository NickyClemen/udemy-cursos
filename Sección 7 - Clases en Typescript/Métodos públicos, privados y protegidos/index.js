var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    Avenger.prototype.bio = function () {
        var mensaje = this.nombre + " " + this.nombreReal + " " + this.equipo + ".";
        console.log(mensaje);
    };
    Avenger.prototype.cambiaEquipoPublico = function (nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo);
    };
    Avenger.prototype.cambiarEquipo = function (nuevoEquipo) {
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        else {
            return true;
        }
    };
    return Avenger;
}());
var antman = new Avenger('Antman', 'Cap', 'Scott Lang');
console.log(antman.bio());
console.log(antman.cambiaEquipoPublico('Cap'));
console.log(antman);
/* En OOP, éstos atributos son más que necesarios (public, private, protected). Controlan desde dónde
pueden ser accesadas las clases. En JS, todas las clases y métodos son públicos.
Por defecto, es público.

public -> Puede ser accesada desde cualquier parte del programa.
protecte -> Puede ser accesada desde la clase o sus subclases (herencias).
private -> Pueden ser modificadas dentro de la misma clase. */
