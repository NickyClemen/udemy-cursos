/* Para poder depurar el archivo de Typescript, hay que cambiar el sourceMap a true.
Cada vez que se compile o se guarden datos, se genera un archivo con el sourcemap. */
var heroe = 'Dick Grayson (Robin)';
var edad = 30;
var mensaje = imprimir(heroe, edad);
console.log(mensaje);
function imprimir(heroe, edad) {
    heroe = heroe.toLowerCase();
    edad += 10;
    return heroe + " " + edad + ".";
}
