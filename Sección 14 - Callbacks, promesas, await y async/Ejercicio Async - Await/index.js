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

const getEmpleado = async (id) => {
    
    const empleadoDB = empleados.find(empleado => empleado.id === id);
    
    if (!empleadoDB) {

        // Control de errores en JS para async-await.
        throw new Error(`No se encontró el ID ${ id }.`);

    } else {

        return empleadoDB;
        
    }
   
} 

const getSalario = async (empleado) => {
    
    const salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {

        throw new Error(`No se encontró el salario de ${ empleado.nombre }.`);
        
    } else {

       return {

            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario,

       }

    }
      
}

const getInformacion = async (id) => {

    const empleado = await getEmpleado(id);
    const resp = await getSalario(empleado);

    return `${ empleado.nombre } tiene un salario de ${ resp.salario }.`;

}

getInformacion(1)
    .then(console.log)
