var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger('Antman', 'Cap', 'Scott Lang');
console.log(antman);
/* En OOP, éstos atributos son más que necesarios (public, private, protected). Controlan desde dónde
pueden ser accesadas las clases. En JS, todas las clases y métodos son públicos.
Por defecto, es público. */
