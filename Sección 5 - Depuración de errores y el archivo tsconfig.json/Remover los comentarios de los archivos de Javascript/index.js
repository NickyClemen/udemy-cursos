/* Remover los comentarios al compilar el código.
    removeComments -> Remueve los comentarios al compilar.
Con *! no lo borra. */
var heroe = 'Dick Grayson (robin)';
var edad = 30;
var mensaje = imprimir(heroe, edad);
console.log(mensaje);
function imprimir(heroe, edad) {
    heroe = heroe.toLowerCase();
    edad += 10;
    return heroe + " " + edad + ".";
}
