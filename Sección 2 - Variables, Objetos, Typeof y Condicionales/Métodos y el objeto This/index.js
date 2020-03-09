/* Métodos son funciones dentro del objeto. 
Cada vez que un contexto de ejecución es corrido, se crea el objeto window, pero a su
vez, también se crea el this, el cuál hace referencia al global object. Está atado al 
contexto. */
var persona = {

    nombre: 'Nicole',
    apellido: 'Ordoqui',
    imprimirNombre: function() {

        console.log(this.nombre);

    },
    direccion: {

        pais: 'Argentina',
        objeterDireccion: function() {
            
            var self = this;

            var nuevaDireccion = function() {
                
                console.log(self);
                console.log('La dirección es en ' + self.pais);

            }

            nuevaDireccion();
            
        }

    }

}

persona.imprimirNombre();
persona.direccion.objeterDireccion();