/* Los templates literals, tienen una función bastante útil cuando se quieren validar los datos, o dar
algún formato antes de la asignación de la variable. */
function etiqueta(literales, ...sustituciones) {

    /* Toda función en JS, aunque no tenga parámetros explícitos, siempre los recibe, y caen en un
    objeto llamado argements.
    La primera parte, son los literales (la primera posición, siempre es un string vacío. De ésta manera, siempre
    nos aseguramos que venga un string en la primera posición).
    La segunda, son lso reemplazos que se van a hacer en el string como tal. */
    // console.log(arguments);
    console.log(literales);
    console.log(sustituciones);

    let resultado = '';

    // Se pueden evaluar cada parte del string, y hacer cambios si es necesario.
    for (let i = 0; i < sustituciones.length; i++) {

        resultado += literales[i];
        resultado += sustituciones[i];

    }    

    return resultado;

}

let unidades = 5,
    costo_unitario = 10;
let mensaje = etiqueta`${ unidades } lápices cuestan ${ unidades * costo_unitario } pesos.`;
/* A los tags, se le puede poner el nombre que se quiera.
etiqueta, es una función que se va a disparar justo cuando se está construyendo (ejecutando)
el template literal.
Cuando una función no tiene un return, devuelve un undefined.
tag son funciones que permiten dinamismo en los template literals. */

console.log(mensaje);