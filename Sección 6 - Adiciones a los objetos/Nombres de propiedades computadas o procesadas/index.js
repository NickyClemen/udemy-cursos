// ES5.
var persona = {};
var person = {

    'primer nombre': 'Cirilla',
    // No se puede usar nombres que tengan un espacio con la notación de punto. Hay que usar la de corchete.

}
var apellido = 'apellido';

/* Se puede usar la notación de corchetes, en lugar de la punto pata hacer referencia
a la propiedad de un objeto. */
persona['primer nombre'] = 'Nicole';
persona[apellido] = 'Ordoqui';

console.log(persona['primer nombre']);
console.log(persona[apellido]);
console.log(person['primer nombre']);

// ES6.
var subFijo = ' nombre';
var lastName = 'primer apellido';
var gente = {

    'primer nombre': 'Ivan',
    [apellido]: 'Rusch',

}
var prueba = {

    ['primer' + subFijo]: 'Susana',
    ['segundo' + subFijo]: 'María'

}

console.log(gente['primer nombre']);
console.log(gente[apellido]);
console.log(prueba['primer nombre']);
console.log(prueba['segundo' + subFijo]);