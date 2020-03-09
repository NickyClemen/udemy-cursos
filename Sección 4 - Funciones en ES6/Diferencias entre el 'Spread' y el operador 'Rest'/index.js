/* Rest
Junta los elementos en un array.

Spread
Esparce los elementos como si fueran enviados de forma separeada. */
let partes = ['Brazos', 'Piernas'];
let cuerpo = ['Cabeza', 'Cuello', ...partes, 'Pies', 'Dedos'];

function saludarRest(saludo, ...nombres) {

    for (i in nombres) {

        console.log(`${ saludo }, ${ nombres[i] }.`);

    }

}

function saludarSpread(saludo, ...nombres) {

    console.log(`${ saludo } ${ nombres }.`);

}

let personas = ['Claudia', 'Daira', 'Alan', 'Mia']

saludarRest('Hola', 'Nicole', 'Cirilla', 'Ivan');
saludarSpread('Qué tal!', personas);

console.log(cuerpo);


