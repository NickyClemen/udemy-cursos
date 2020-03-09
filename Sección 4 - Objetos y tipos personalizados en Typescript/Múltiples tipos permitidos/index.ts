type Heroe = {

    nombre:string, 
    edad:number, 

} 
/* Unión de tipos.
Permite flexibilidad, pero sin perder la seguridad del tipado. */
let anyway: string | number | Heroe = 'Nicole';
anyway = {

    nombre: 'Flash',
    edad: 18,

}