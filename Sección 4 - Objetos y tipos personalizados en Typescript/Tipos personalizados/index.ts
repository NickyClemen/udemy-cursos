/* En Typescript, existe type, que nos permite crear un tipo de dato custom.
Se puede definir lo que sea.
Se pueden crear tipos en archivos externos. */
type Heroe = {

    nombre:string, 
    edad:number, 
    poderes:string[], 
    getNombre:() => string,


} // Definición de un tipo de dato.

let flush:Heroe = {

    nombre: 'Wally West',
    edad: 20,
    poderes: ['Correr', 'Viajar en el tiempo'],
    getNombre() {

        return this.nombre;

    }

}

let superman:Heroe = {

    nombre: 'Clark Kent',
    edad: 500,
    poderes: ['Volar', 'Super velocidad'],
    getNombre() {

        return this.nombre;

    }

}



