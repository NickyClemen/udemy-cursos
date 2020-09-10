/* Polimorfismo -> Una función que puede recibir diferentes tipos de dato/parámetro. */
function determinarDato(a) {

    if (a === undefined) {

        console.log('A es UNDEFINED. No sé qué hacer.');

    }

    if (typeof a === 'number') {

        console.log('A es un número. Puedo hacer operaciones con un número.');

    }

    if (typeof a === 'string') {

        console.log('A es un texto. Puedo seguir haciendo operaciones, pero con textos.');

    }

    if (typeof a === 'object') {

        console.log('A es un objeto. Puede ser cualquier cosa.');

        if (a instanceof Number) {

            console.log('A es un objeto numérico.');

        }

    }

}

var b = new Number(3);
// Cuando se define de ésta manera, no es un valor primitivo, es un objeto. Objeto de tipo número.

console.log(b);

determinarDato(b);