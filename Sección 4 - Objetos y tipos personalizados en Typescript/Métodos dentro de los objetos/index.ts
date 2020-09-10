let flash: { nombre:string, edad:number, poderes:string[], getNombre:() => string } = {

    nombre: 'Wally West',
    edad: 20,
    poderes: ['Correr', 'Viajas'],
    getNombre() {

        return this.nombre;

    }

} // No importa el orden, pero sí el nombre y el tipo.

flash.getNombre();

