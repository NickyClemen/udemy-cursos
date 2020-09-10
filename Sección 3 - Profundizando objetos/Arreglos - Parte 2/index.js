var arr = [
    
    true, 
    {
        nombre: 'Nicole',
        apellido: 'Ordoqui'

    }, function() {

        console.log('Estoy dentro de un array.');

    }, function(persona) {

        console.log(persona.nombre + ' ' + persona.apellido);

    },
    [

        'Nicole',
        'Cirlla',
        'Ivan', 
        'Claudia',
        [

            'Faye',
            'Jessica',
            'Alejandro',
            'Andrea',
            function() {

                console.log(this);

            }

        ]

    ],

];

console.log(arr);
/* Se puede saber la cantidad de posiciones de un array con la función length. */

// Invoca el boolean.
console.log(arr[0]);

// Invoca el objeto.
console.log(arr[1].nombre + ' ' + arr[1].apellido);

// Ejecuta la función.
arr[2]();

// Ejecutar una función pasando otra posición como parámetro.
arr[3](arr[1]);

// Array anidado.
console.log(arr[4][4]);

var arrDos = arr[4][4];

arrDos[1] = 'Luna';

console.log(arrDos);
console.log(arr);

arrDos[4]();