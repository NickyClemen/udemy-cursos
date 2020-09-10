/*  Implicit binding: Es cuando se coloca el this adelante de una función para que nos defina el objeto actual
y el contexto. */
const usuario = {
    nombre: 'Nicole',
    edad: 29,
    presentacion() {
        console.log(`Mi nombre es ${ this.nombre } y tengo ${ this.edad }.`);
    },
    mascota: {
        nombre: 'Felipe',
        edad: 1,
        presentacion() {
            console.log(`El nombre de mi mascota es ${ this.nombre } y tiene ${ this.edad }.`);
        },
    }
}

usuario.presentacion();
usuario.mascota.presentacion();