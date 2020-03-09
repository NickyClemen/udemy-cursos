/* Algunas veces, se llega a la situación en la que el dev sabe más del código que
el mismo Typescript. Generalemente pasa cuando se tiene código dinámico o cosas genéricas
que están fluyendo a lo lardo del programa. 
En todos lenguajes de programación, eso se llama casting. */
let nada:any = 'Cualquier cosa';

let largo:number = (<string>nada).length;
// Casting.