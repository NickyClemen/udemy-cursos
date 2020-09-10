// Crear objeto.
const persona = {

    // key (identificador): value,
    nombre: 'Nicole',
    apellido: 'Ordoqui',
    edad: 28,
    profesion: 'Programadora',
    email: 'email@email.com',
    musica: ['Rock', 'Grunge'],
    domicilio: {

        ciudad: 'Lanus',
        pais: 'Argentina'

    },
    fechaCumpleanos: function() {

        return new Date().getFullYear() - this.edad;

    }

}

const personaDos = {

    // key (identificador): value,
    nombre: 'Ivan',
    apellido: 'Rusch',
    edad: 33,
    profesion: 'Algo',
    email: 'email@email.com',
    musica: ['Rock', 'Grunge'],
    domicilio: {

        ciudad: 'Lanus',
        pais: 'Argentina'

    },
    fechaCumpleanos: function() {

        return new Date().getFullYear() - this.edad;

    }

}

/* A los objetos, se accede por la key.
Se puede almacenar cualquier tipo de dato primitivo.
Se puede agregar un objeto dentro de otro. */
persona.musica.push('Jazz');

// Notación de punto.
console.log(persona.nombre);
console.log(persona.domicilio.ciudad);
console.log(persona.musica[2]);

// Notación de corchete.
console.log(persona['domicilio']['pais']);
console.log(persona.fechaCumpleanos());
console.log(personaDos.fechaCumpleanos());