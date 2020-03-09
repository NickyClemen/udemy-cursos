let flash: { nombre:string, edad:number, poderes:string[], getNombre:() => string } = {

    nombre: 'Wally West',
    edad: 20,
    poderes: ['Correr', 'Viajar en el tiempo'],
    getNombre() {

        return this.nombre;

    }

}

let superman: { nombre:string, edad:number, poderes:string[], getNombre:() => string } = {

    nombre: 'Clark Kent',
    edad: 500,
    poderes: ['Volar', 'Super velocidad'],
    getNombre() {

        return this.nombre;

    }

}



