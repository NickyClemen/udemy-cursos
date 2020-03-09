function regresar<T>(arg:T) {

  return arg;

} /* Se convierte la función en genética con el '<>'. Por convención, se usa la T.
Los genéricos son funciones que retornan cualquier tipo de dato (nos permite trabajar con cualquier tipo
de dato).
No existen en Javascript. */

console.log(regresar(15.456789));
console.log('Dick Grayson');
console.log(regresar(new Date()));
