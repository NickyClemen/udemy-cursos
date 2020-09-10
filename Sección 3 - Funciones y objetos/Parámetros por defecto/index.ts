function fullName(nombre:string, apellido?:string, capitalizado:boolean = false):string { 

    return (capitalizado) ? `${ capitalizar(nombre) } ${ capitalizar(apellido) }` : `${ nombre } ${ apellido }.`;

} 

function capitalizar(palabra:string):string {

    return `${ palabra.charAt(0).toUpperCase() }${ palabra.substring(1).toLowerCase() }`;

}

/* A diferencia de un parámetro opcional, es un parámetro que la
función necesita para trabajar. No es un requirimiento. */

let nombre = fullName('dick', 'grayson', true);

console.log(nombre);

