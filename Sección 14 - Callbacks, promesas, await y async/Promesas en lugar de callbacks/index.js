const empleados = [

    {

        id: 1,
        nombre: 'Nicole',

    },
    {

        id: 2,
        nombre: 'Cirilla',

    },
    {

        id: 3,
        nombre: 'Ivan',

    }

];

const salarios = [

    {

        id: 1,
        salario: 1000,

    },
    {

        id: 2,
        salario: 2000,

    },

];

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        const empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {

            reject(`No existe el empleado con el ID ${ id }.`);

        } else {

            resolve(empleadoDB);
            /* No hace falta poner el null, porque se entiende que se ejecuta cuando la 
            promesa se resuelve correctamente. */

        }

    });
    /* Es como si tuvieran internamente un callback. 
    Dentro de las promesas, van dos funciones.
        1) Resolve: Resuelto.
        2) Reject: Error. */

    /* return promesa;
    Cómo las promesas son asíncronas, hay que retornar las promesas para que
    no devuelva undefined. */

} 

const getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        const salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {

            reject(`No existe el salario del empleado con ID ${ empleados.id }.`);
            
        } else {

            resolve({
                    
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario,

            });
 
        }

    });   
    
}

// Otra manera de presentar promesas.
getEmpleado(1)
    .then(getSalario)
    .then(console.log)
    .catch(err => console.log(err));

/* getEmpleado(1)
    .then(empleado => {

        /* getSalario(empleado)
            .then(resp => {

                console.log(resp);

            }) */

        /* return getSalario(empleado);

    })
    .then(resp => {

        console.log(resp);

    })
    .catch(err => console.log(err)); */
/* Manejar las respuestas de las promesas.
then() se ejecuta después de que la promesa se resuelva (maneja el resolve).
catch para manejar los errores. (maneja el reject) */