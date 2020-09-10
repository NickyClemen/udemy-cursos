function Playlist(nombre) {
    this.nombre = nombre;
} // Object constructor.

Playlist.prototype.play = function() {
    console.log(`Reproduciendo la playlist ${ this.nombre }.`);
}

Playlist.prototype.eliminar = function() {
    console.log(`Eliminando la playlist ${ this.nombre }.`);
}

// Herencia.
function Cancion(nombre, genero) {
    Playlist.call(this, nombre); // call funciona como super para heredar los atributos.
    this.genero = genero;
}

Cancion.prototype = Object.create(Playlist.prototype); // Hedera los métodos.

const cancion = new Cancion('About girl', 'grunge');
cancion.play();

