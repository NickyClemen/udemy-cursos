/* En ES5, y en versiones anteriores, las funciones sirven con un doble propósito
de ser llamadas con o sin la palabra reservada 'new'.
Con 'new', el valor de 'this' dentro de una función, es un nuevo objeto, y ese nuevo objeto
es retornado. 
Cuando se lo llamamos sin el 'new', simplemente hacemos el llamado de la función y esperamos el retorno
de algún valor procesado que puede ser un objeto, undefined o null. 

// ES6
new.target (meta propiedad)
Una meta propiedad, es una propiedad de un no-objeto, que provee información adicional relacionada
con su procedencia (como el new). 
Cuando el constructor de la función de llamada, new.target se llena con el operador new.
Si la función call() es ejecutada, new.target no estará definida ya que no se ejecutó el constructor.
Es uan alternativa al instanceof, si queremos evaluar si un objeto se creó utilizando el new.target. */
// var nombre = 'Nicole';

function Persona(nombre) {
    // Validación para saber si se usó new o no.
    // ES5.
    /* if (this instanceof Persona) {

        this.nombre = nombre;

    } else {

        throw new Error('Ésta función debe ser utilizada con el new.');

    } */

    if (typeof new.target !== 'undefined') {

        this.nombre = nombre;

    } else {

        throw new Error('Ésta función debe ser utilizada con el new.');

    }

    this.nombre = nombre;

}

var persona = new Persona('Nicole');
var noEsPersona = Persona.call(persona, 'Nicole');
// Hay que tener cuidado con ésta forma, porque sobreescribe variables globales. 

// console.log(persona);
// console.log(noEsPersona);
/* Cuando la versión no es declarada con el new, y pasa por un this.[propiedad] (seteo
de alguna variable), this apunta al objeto global (window). */
/* Todas las funciones tienen en su propotipo, un método que se llama call(), en el 
cuál se puede mandar el primer parámetro, como el elemento que se quiere trabajar como this.
Al usarlo, la falta de uso del new no pasa por el error, pero no devuelve nada. */




