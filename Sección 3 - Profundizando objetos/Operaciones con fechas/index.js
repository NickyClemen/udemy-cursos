var fecha = new Date(2016, 9, 20);

// Modificar el prototype.
Date.prototype.sumarDias = function(dias) {

    this.setDate(this.getDate() + dias);

    return this;

}

Date.prototype.sumarAnios = function(anios) {

    this.setFullYear(this.getFullYear() + anios);

    return this;

}

/* Setear fechas.
fecha.setDate(31);
/* Hay:
    1) setHours();
    2) setMilliseconds();
    3) etc. */

console.log(fecha);
console.log(fecha.sumarDias(5));
console.log(fecha.sumarAnios(5));