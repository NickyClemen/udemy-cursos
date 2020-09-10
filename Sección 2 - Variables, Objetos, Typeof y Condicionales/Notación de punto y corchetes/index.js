/* La notación de punto, nos permite obtener las variables de un objeto.
Por cada nivel jerárquico, es un punto.

Notación de corchete. Es bastante utilizada cuando se necesita obtener datos de manera dinámica. 

La notación de punto y corchete pueden devolver undefined. */

var persona = {

    nombre: 'Nicole',
    apellido: 'Ordoqui',
    edad: 28,
    direccion: {

        pais: 'Argentina',
        ciudad: 'Lanus',
        edificio: {

            nombre: 'Maral',
            telefono: '1170002448'

        }

    }

}

var edificio = persona.direccion.edificio;
var campo = 'edad';

// Agregar propiedad nueva.
persona.direccion.zipcode = 1824;
edificio.numPiso = '8vo piso';

// Notación de punto.
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.direccion.pais);
console.log(persona.direccion.zipcode);
console.log(persona);

// Notación de corchetes.
console.log(persona['nombre']);
console.log(persona['direccion']['pais']);
console.log(persona[campo]);