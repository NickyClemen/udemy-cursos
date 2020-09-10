/* Protype -> Propiedades o métodos, que son heredados por ser un tipo de dato.
Las funciones también tienen un prototype de función. 

arguments -> Están en el prototype de las funciones. */
function miFuncion(a, b, c, d) {

    // Validar el pasaje total de parámetros.
    if (arguments.length !== 4 ) {

        console.log('La función necesita cuatro parámetros.');
        return; // Para salir de la función.

    }

    console.log(arguments);

    console.log(a + b + c + d);

}
/* Cuando una función es invocada, aparte de crear un scope, crea un prototype, en la cuál
está la varible arguments.
No hacen referencia a los valores que están en la función (a, b, c, d), sino a los que se envían cuando
se invoca la función.
Aunque no se pasen todos los parámetros, lo devuelve igual:
    function miFuncion(a, b, c, d) {

    console.log(arguments);

} 

miFuncion(10);
arguments puede almacenar diversos tipos de datos. */

miFuncion(10, 20, 30);