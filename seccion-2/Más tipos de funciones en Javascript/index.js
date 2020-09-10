// IIFE (Funciones que se declaran y se ejecutan inmediatamente).
(function(tecnologia) {

    console.log(`Aprendiendo ${ tecnologia }.`);

})('Javascript');

// Métodos de propiedad -> Cuando una función de declara dentro de un objeto.
const musica = {

    reproducir: function(id) {

        console.log(`Reproduciendo canción con ID ${ id }.`);

    },
    pausar: function() {

        console.log(`Pausar la música.`);

    }

}

// Los métodos también puede crearse fuera del objeto.
musica.borrar = function(id) {

    console.log(`Eliminando la canción con ID ${ id }.`);

}

musica.reproducir(30);
musica.borrar(2);
musica.pausar();