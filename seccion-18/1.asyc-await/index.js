/* Async-Await permite crear funciones asíncronas. */
async function obtenerClientes() {
    const error = false;
    const clientes = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Clientes descargados.'), 2000);
    });

    if(!error) {
        const respuesta = await clientes; // await espera la respuesta.
        return respuesta;
    } else {
        await Promise.reject(new Error('Ha ocurrido un error.'));
    }

} /* Siempre van a requerir un promise. */

obtenerClientes()
    .then(res => console.log(res))
    .catch(err => console.error(err.message));