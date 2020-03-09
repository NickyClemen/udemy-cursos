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

const getEmpleado = (id, callback) => {

    const empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {

        callback(`No existe el empleado con el ID ${ id }.`);

    } else {

        callback(null, empleadoDB);

    }

} 

const getSalario = (empleado, callback) => {

    const salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {

        callback(`No existe el salario del empleado con ID ${ empleado.id }.`);
      
    } else {

        callback(null, {
            
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario,

        });

    }

}

// Uso.
getEmpleado(3, (err, empleado) => {

    if (err) {

        return console.log(err);

    }

    getSalario(empleado, (err, resp) => {

        if (err) {
    
            return console.log(err);
    
        }
    
        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }.`);
    
    });

});

