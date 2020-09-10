import * as UI from './interfaz.js';
import { API } from './api.js';

UI.formularoBuscar.addEventListener('submit', (e) => {
     e.preventDefault();

     const artista = document.querySelector('#artista').value;
     const cancion = document.querySelector('#cancion').value;

     if(artista === '' || cancion === '') {
          UI.divMensajes.innerHTML = 'Todos los campos son obligatorios.';
          UI.divMensajes.classList.add('error');

          setTimeout(() => {
               UI.divMensajes.innerHTML = '';
               UI.divMensajes.classList.remove('error');
          }, 3000);
     } else {
          const api = new API(artista, cancion);
          api.consultarApi()
               .then(response => {
                    if(response.response.lyrics) {
                         const lyrics = response.response.lyrics;
                         UI.divResultado.textContent = lyrics;
                    } else {
                         UI.divMensajes.innerHTML = 'La canción no existe. Vuelve a intentarlo.';
                         UI.divMensajes.classList.add('error');

                         setTimeout(() => {
                              UI.divMensajes.innerHTML = '';
                              UI.divMensajes.classList.remove('error');
                              UI.formularoBuscar.reset();
                         }, 3000);
                    }
               })
               .catch(reject => console.error(reject.message));
     }
});