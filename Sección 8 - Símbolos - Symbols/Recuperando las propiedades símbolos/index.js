let id = Symbol.for('id');
let activo = Symbol.for('activo');

let persona = {

    [id]: '1303',
    [activo]: true,
    ['codigo']: '#NIOR3',
    nombre: 'Nicole',
    apellido: 'Ordoqui',
    edad: 31,

}

console.log(Object.keys(persona));

for (key in persona) {

    console.log(persona[key]);

} // Funciona aunque las propiedades sean conmutadas.

// Obtener lo simbolos de un objeto.
let symbols = Object.getOwnPropertySymbols(persona);
console.log(symbols);

for (i in symbols) {

    console.log(symbols[i], Symbol.keyFor(symbols[i]));

}