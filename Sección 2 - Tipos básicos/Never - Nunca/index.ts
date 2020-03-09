// Declaración de never en Typescript.
/* El tipo de dato never, representa un tipo de dato que nunca puede suceder.
Sirven para marcar puntos críticos en el programa. */

function error(mensaje):never {

    throw new Error(mensaje);

} 

error('Error crítico.');











