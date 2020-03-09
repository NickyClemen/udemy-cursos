/* El Javascript, por defecto, todos los parámetros son opcionales. */
function nombreCompleto(nombre:string, apellido?:string):string { 

    return `${ nombre } ${ apellido }.`;

} // Para hacer que un parámetro sea opcional, se le agrega el '?'.

let nombre = nombreCompleto('Wally', 'West');

console.log(nombre);

