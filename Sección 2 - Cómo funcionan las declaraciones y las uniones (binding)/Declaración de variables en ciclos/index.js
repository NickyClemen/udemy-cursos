/* ES5.
for (var i = 0; i <= 10; i++) {

    //
    //
    //

}

console.log(i);
La salida del ciclo es 11, porque es el número que hace que la condición del ciclo ya no se cumpla
(en cada vuelta, i va sumando uno). */

// ES6.
for (let i = 0; i <= 10; i++) {

    //
    //
    //

}

console.log(i);
/* Salta un error, porque la variable solamente existe dentro de su scope. 
Muy útil cuando se necesita que variables iguales convivan. */
