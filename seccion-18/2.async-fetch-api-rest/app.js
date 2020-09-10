async function leerTodos() {
    const URL = 'https://jsonplaceholder.typicode.com/todos';
    const respuesta = await fetch(URL);
    const datos = await respuesta.json();

    return datos;
}

leerTodos()
    .then(res => console.log(res))
    .catch(error => console.error(error.message))