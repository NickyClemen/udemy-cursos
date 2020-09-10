let coloresUno = ['Rojo', ['Verde', 'Amarillo'], 'Violeta', 'Naranja'];
let [colorUno, [colorDos]] = coloresUno;

let coloresDos = ['Rojo', 'Verde', 'Amarillo', 'Violeta', 'Naranja'];
let [colorPrincipal, colorSecundario, ...demasColores] = coloresDos;
/* Con el operador REST, se puede cortar el array y crear uno nuevo dentro de otro. 
colorPrincipal es el color de la primera posición.
Si el array tuviese dos posiciones, el operador REST devolvería un array vacío.
El operador REST solamente funciona para la destructuración de arrays, no para objetos. */

console.log(colorUno);
console.log(colorDos);
console.log(colorPrincipal);
console.log(colorSecundario);
console.log(demasColores);