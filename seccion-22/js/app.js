const ui = new UI();
const buscador = document.querySelector('#buscar input');

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
        ui.mostrarEstablecimientos();
    });

    buscador.addEventListener('input', () => {
        if(buscador.value.length > 5) {
            ui.obtenerSugerencias(buscador.value);
        } else {
            ui.mostrarEstablecimientos();
        }
    });
}