/* Los callbacks, son la forma tradicional de hacer tareas a destiempo.
Salvo que tengan una función asíncrona adentro, lo único que hacen, es demorar la tarea
(son síncronos). */
const getUserById = (id, callback) => {

    const usuario = {

        nombre: 'Nicole',
        id

    }

    if (id === 20) {

        callback(`El usuario con el ${ id } no existe.`);

    } else {

        callback(null, usuario);

    }

    /* El primer arugmento que se envía, es el error.
    El segundo, el objeto que se está esperando. */

}

getUserById(5, (err, user) => {

    if (err) {

        return console.log(err);

    }

    console.log('Usuario de base de datos ', user);

});