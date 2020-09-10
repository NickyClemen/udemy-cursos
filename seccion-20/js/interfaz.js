class Interfaz {
    constructor() {
        this.init();
        this.listado = document.getElementById('resultado-evento');
    }

    init() {
        this.imprimirCategorias();
    }

    imprimirCategorias() {
        const listaCategorias = eventBrite.obtenerCategorias()
            .then(categories => {
                const category = categories.categories;
                const selectCategory = document.getElementById('listado-categorias');
                
                category.forEach(category => {
                    const option = document.createElement('option');
                    option.value = category.id;
                    option.appendChild(document.createTextNode(category.name_localized));
                    selectCategory.appendChild(option);
                }); 
            })
            .catch(reject => console.error(reject.message));
    }

    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        const buscador = document.getElementById('buscador');

        div.classList = clases;
        div.appendChild(document.createTextNode(mensaje));

        buscador.appendChild(div);

        setTimeout(() => this.limpiarMensaje(), 3000);
    }

    limpiarMensaje() {
        const alert = document.querySelector('.alert');

        if(alert) {
            alert.remove();
        }
    }
}