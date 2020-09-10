let getNombre = async () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve('Nicole');

        }, 3000);

    });

    // return 'Nicole';

}

const saludo = async () => {

    const nombre = await getNombre();
    /* Esperar la respuesta de la promesa. Detiene la ejecución del código.
    Tiene que estar dentro de una funciónn async. */
    
    return `Hola, ${ nombre }.`;

} /* async retorna una promesa. */

/* getNombre()
    .then(nombre => {

        console.log(nombre);

    }); */

saludo()
    .then(mensaje => {

        console.log(mensaje);

    });

