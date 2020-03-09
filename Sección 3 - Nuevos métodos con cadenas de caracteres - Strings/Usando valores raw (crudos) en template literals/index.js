let mensaje = `Hola \nmundo.\\`;
let mensajeDos = String.raw`Hola \nmundo.\\`;
/* Hay veces que hay caracteres especiales que hacen algún tipo de cambio en el string
cuando son impresos.
Para que salga el texto sin modificar, se utiliza el tag String.raw. Es algo 
exclusivo de los template literals. */
console.log(mensaje);
console.log(mensajeDos);