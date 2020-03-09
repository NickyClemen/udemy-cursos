/* Parámetro REST
El parámetro REST, es indicado con tres puntos (...), seguido del nombre que le asignemos a dicho parámetro.
Ese parámetro, se convierte en un array que contiene el "resto" de los parámetros pasados a la función. */

/* ES5.
function agregarAlumnos() {

    console.log(arguments);

    for (var i = 1; i < arguments.length; i++) {

        arguments[0].push(arguments[i]);

    }

    return arguments[0];

}

var alumnosArray = ['Nicole'];
var alumnosArr = agregarAlumnos(alumnosArray, 'Cirilla', 'Ivan', 'Susana', 'Andrea');

console.log(alumnosArr); */

// ES6.
function agregarAlumnos(alumnosArray, ...alumnos) {
    // El "..." indica que espera N parámetros opcionales.

    console.log(arguments);

    for (let i = 0; i < alumnos.length; i++) {

        alumnosArray.push(alumnos[i]);

    }

    return alumnosArray;

}

let alumnosArray = ['Nicole'];
let alumnosArr = agregarAlumnos(alumnosArray, 'Cirilla', 'Ivan', 'Susana', 'Andrea');

console.log(alumnosArr);