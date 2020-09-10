/* En el ES5, cuando se recorrían las propiedades de un objeto, la aparición de las mismas dependía del
navegador que se utilizara.
Con ES6, ya hay un orden:
    1) Todas las llaves van en orden ascendente.
    2) Todas las llaves tipo string, van ordenadas en la manera que fueron agregadas al objeto.
    3) Todos los símbolos en el orden que fueron agregados al objeto. */

let fernando = {

    nombre: 'Fernando',
    apellido: 'Herrera',
    edad: 30, 
    bio: 'Analista programador',
    2: 'Nada en particular',

}

let objeto = {

    c: 1,
    0: 1,
    x: 1,
    15: 1,
    r: 1,
    3: 1,
    b: 1,

}

objeto.d = 1;
objeto['2'] = 1;
objeto['a'] = 1;

console.log(Object.getOwnPropertyNames(objeto).join(','));
/* El método Object.getOwnPropertyNames() devuelve un array con todas las propiedades
(numerables o no) encontradas en un objeto dado. */
console.log(Object.keys(objeto));
console.log(JSON.stringify(objeto));

for (i in Object.keys(objeto)) {

    console.log(Object.keys(objeto)[i])

}






