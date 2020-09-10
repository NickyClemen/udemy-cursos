const key = '5f19220824968557423ffa7e44414b400737b6a1870796232a1574a342f20528';
const api = new Api(key);
const ui = new UserInterface();
const formulario = document.querySelector('#formulario');

eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', submitFunction);
}

function submitFunction(e) {
    e.preventDefault();

    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    const criptomonedaSelect = document.querySelector('#criptomoneda');
    const criptomonedaSeleccionada = criptomonedaSelect.options[criptomonedaSelect.selectedIndex].value;

    if(monedaSeleccionada === '' || criptomonedaSeleccionada === '') {
        ui.mostrarMensaje('Selecciona una opción válida.', 'alert bg-danger text-center');
    } else {
        api.obtenerValores(monedaSeleccionada, criptomonedaSeleccionada)
            .then(data => ui.mostrarResultado(data.response.RAW, monedaSeleccionada, criptomonedaSeleccionada))
            .catch(error => ui.mostrarError())      
    }
}