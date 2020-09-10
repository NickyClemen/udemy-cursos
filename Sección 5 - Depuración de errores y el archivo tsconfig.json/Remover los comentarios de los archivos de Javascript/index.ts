/* Remover los comentarios al compilar el código. 
    removeComments -> Remueve los comentarios al compilar.
Con *! no lo borra. */

let heroe:string = 'Dick Grayson (robin)';
let edad:number= 30;
let mensaje:string = imprimir(heroe, edad);

console.log(mensaje);

function imprimir(heroe:string, edad:number):string {

    heroe = heroe.toLowerCase();
    edad += 10;

    return `${ heroe } ${ edad }.`;

}

