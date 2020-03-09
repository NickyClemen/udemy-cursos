/* // Ciclo especializado en colecciones.
let numeros = [100, 20, 30, 50, 200];

for (let numero of numeros) {

    console.log(numero);

} /* Se puede obviar la inicilialización de la variable. Si se hace eso, se obtiene el último valor
almacenado en la variable.
No hace falta poner la variable. */

/* let personas = [

    { nombre: 'Nicole', edad: 28 },
    { nombre: 'Cirlla', edad: 1 },
    { nombre: 'Ivan', edad: 33 },
    { nombre: 'Faye', edad: 1 },

]; */

/* let personas = new Set();

personas.add( { nombre: 'Nicole', edad: 28 });
personas.add( { nombre: 'Cirilla', edad: 1 });
personas.add( { nombre: 'Ivan', edad: 33 }); */

let personas = new Map([['nombre', 'Nicole'], ['apellido', 'Ordoqui']]);
/* Los maps no tienen nombres de keys repetidos. */

for (persona of personas) {

    console.log(persona);

}
/* Si no hubiera un objeto (valores planos), podría usarse solamente el 'persona'. */


