/*  Explicit binding: Utilizar funciones para atar el this a un contexto (call, apply y bind). */
function persona(el1, el2) {
    console.log(`Hola, soy ${ this.nombre }. Me gusta el ${ el1 } y el ${ el2 }.`);
}

const informacion = {
    nombre: 'Nicole',
    profesion: 'Programadora',
}

const generosMusicales = ['Heavy Metal', 'Rock']

persona.call(informacion);
persona.apply(informacion, generosMusicales);

// La diferencia con call(), es el bind() te crea una nueva función.
const nuevaFn = persona.bind(informacion, ...generosMusicales);
nuevaFn();