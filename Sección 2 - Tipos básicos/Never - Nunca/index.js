// Declaración de never en Typescript.
/* El tipo de dato never, representa un tipo de dato que nunca puede suceder. */
function error(mensaje) {
    throw new Error(mensaje);
}
error('Error crítico.');
