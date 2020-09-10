/* Tienen dos funciones de tiempo:
    1) Una para ejecutar código en determinado tiempo.
        setTimeout(función, tiempo);
    2) Cuando se quiere que un código se repira X cantidad de veces en cierto tiempo.
        setInterval(función, tiempo); */

// 1)
setTimeout(function() {

    console.log('Pasó un segundo');

}, 1000);

// 2)
var segundos = 0;

/* Para poder cortar el setInterval, se lo puede almacenar en una variable, y usar
clearInterval() dentro de un condicional.
No se puede hacer un clearInterval(this), porque no apunta a la función,
sino al Global Object (window).*/
var intervalo = setInterval(function() {

    segundos++;

    console.log('seg', segundos);

    if (segundos === 3) {

        clearInterval(intervalo);

    }

}, 1000);

// Ejemplo con this.
var juan = {

    nombre: 'Nicole',
    edad: 30,
    imprimir: function() {

        var self = this;
        /* Se crea ésta variable para almacenar this, aprovechando que la función si apunta
        al objeto. */

        setTimeout(function() {

            console.log(self.nombre, self.edad);

        }, 1000);

    }

}

juan.imprimir();

