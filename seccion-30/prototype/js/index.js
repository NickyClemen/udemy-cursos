/*  // ES5. 
function Playlist(nombre) {
    this.nombre = nombre;
} // Object constructor.

Playlist.prototype.play = function() {
    console.log(`Reproduciendo la playlist ${ this.nombre }.`);
}

Playlist.prototype.eliminar = function() {
    console.log(`Eliminando la playlist ${ this.nombre }.`);
}

const playlist = new Playlist('Grunge');

console.log(playlist);
playlist.play();
playlist.eliminar(); */

class Playlist {
    construtor(nombre) {
        this.nombre = nombre;
    }

    play() {
        console.log(`Reproduciendo la playlist ${ this.nombre }.`);
    }

    eliminar() {
        console.log(`Eliminando la playlist ${ this.nombre }.`);
    }
} // Abstracción de los prototypes.
