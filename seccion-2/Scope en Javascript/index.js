var a = 'a';
let b = 'b';
const c = 'c';

// Function scope. Entorno local.
function functionScope() {

    var a = 'A';
    let b = 'B';
    const c = 'C';

    console.log('FUNCIÓN: ', a, b, c);

}

functionScope();

// Scope de bloque. Todo lo que está entre llaves.
if (true) {

    var a = 'AA';
    let b = 'BB';
    const c = 'CC';

    console.log('BLOQUE: ', a, b, c);

} /* El scope de bloque sobreescribe las variables globales declaradas con var. Las que lo estén
con let y const, solamente están disponibles en el bloque. */

for (var a = 0; a < 10; a++) {

    console.log(a);

}

console.log('GLOBALES: ', a, b, c);
/* Se las considera globales, porque no están dentro de un bloque de código, una función,
y pueden ser accedidas durante el flujo de ejecución del programa. */