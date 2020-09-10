export class API {
     constructor(artista, cancion) {
          this.artista = artista;
          this.cancion = cancion;
          this.URL = `https://api.lyrics.ovh/v1/${ this.artista }/${ this.cancion }`;
     }

     async consultarApi() {
          const fetchData = await fetch(this.URL);
          const response = await fetchData.json();

          return {
               response
          }
     }
}