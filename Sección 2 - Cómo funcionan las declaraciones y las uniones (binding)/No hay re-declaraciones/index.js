let mensaje = 'Hola';

if (3 === 3) {

    let mensaje = 'Qué tal.';

    console.log(mensaje);

}

console.log(mensaje);

/* En ES6, sólo puede haber una declaración por bloque de variable. 
Con ES5 o anteriores, era válido tener una variable inicializada con el mismo nombre y distinto valor.
Va a ser válido, y va a predominar la última vez que se declaró la variable.
En ES6, el inicializador let obliga que haya una sola por bloque.
Cuando se tiene un let mensaje, y uno igual en otro scope (la guarda en un espacio de memoria distinto,
y el programa la trata como una variable aparte, aunque ya exista), pueden convivir porque no están
declaradas juntas. */


