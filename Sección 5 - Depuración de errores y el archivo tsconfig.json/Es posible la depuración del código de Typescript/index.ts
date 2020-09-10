/* Para poder depurar el archivo de Typescript, hay que cambiar el sourceMap a true.
Cada vez que se compile o se guarden datos, se genera un archivo con el sourcemap.
Ayuda a que se cargue el archivo .ts en el Source de las Dev Tools. */
let heroe:string = 'Dick Grayson (Robin)';
let edad:number= 30;
let mensaje:string = imprimir(heroe, edad);

console.log(mensaje);

function imprimir(heroe:string, edad:number):string {

    heroe = heroe.toLowerCase();
    edad += 10;

    return `${ heroe } ${ edad }.`;

}

