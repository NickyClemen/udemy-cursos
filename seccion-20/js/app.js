const eventBrite = new EventBrite();
const ui = new Interfaz();
const btn = document.getElementById('buscarBtn');

eventListeners();

function eventListeners() {
    btn.addEventListener('click', eventClick);
}

function eventClick(e) {
    e.preventDefault();

    const textoBuscador = document.getElementById('evento').value;
    const categories = document.getElementById('listado-categorias');
    const selectedCategory = categories.options[categories.selectedIndex].value;

    if(textoBuscador !== '') {
        eventBrite.obtenerEvento()
            .then(event => {
                console.log(event);
            })
    } else {
        ui.mostrarMensaje('Ingresa un dato válido', 'alert alert-danger mt-4');
    }
}