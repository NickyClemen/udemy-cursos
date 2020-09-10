/* var arr = new Array; es igual a var arr = []; */
var arr = [5, 4, 3, 2, 1];

// Métodos
//Invierte el array.
arr.reverse();
 
/* Regresa un array (nuevo diseño/arquitectura).
Nos permite ejecutar una función contra cada uno de los elementos del array, sin usar un ciclo. */
arr = arr.map(function(elem) {

    elem *= elem;
    return elem;

});

arr = arr.map(Math.sqrt);
// Raíz cuadrada.

/* join() regresa un nuevo array. Convierte (o pega) todas las posiciones del array separados por
una coma. Las comas son porque no se especificó ningún parámetro (se puede especificar con qué
queremos separar las posiciones). Hace un solo string. */
arr = arr.join(' / ');

/* Función inversa al join(). Corta el arreglo. Sin parámetros, revuelve un array de un elemento. */
arr = arr.split(' / ');

/* A diferencia de otros lenguajes de programación, como Java, los arrays no pueden crecer; una vez
que llegan a su capacidad máxima, no pueden crecer. En Javascript, no hay problema. 
push() agrega elementos a la última posición del array. */
arr.push('6');

// Agrear elementos a la primera posición del array.
arr.unshift('0');

// Invoca la representación textual del array. Es más rápido que el split(). 
var cadena = arr.toString();

// Eliminar la última posición del array. Regresa la última el elemento eliminado.
var eliminar = arr.pop();

/* Recibe n cantidad del parámetros:
    1) Tiene que ser obligatoriamente un número. Indica la posición
    del array en el que se quiere trabajar.
    2) Posición que se quiere eliminar. Si no se quiere eliminar nada, se pone un 0.
    3) Se pueden meter parámetros.
Se pueden eliminar n cantidad de registros.
No necesariamente tiene que eliminar algo.*/
arr.splice(1, 0, '10', '20', '30');

/* Función opuesta al splice().
Corta el array:
    1) El primer parámetro, indica la posición en la que se quiere empezar a cortar.
    2) El segundo parámetro es la otra posición con base 0 que se quiere cortar. Corta la posición
    anterior a la indicada (hasta dónde se quiere cortar sin incluirlo). */
arr = arr.slice(0, 3);

console.log(arr);