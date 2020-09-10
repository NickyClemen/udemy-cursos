/* Factory: Patrón para la creación de objetos. Ayuda a crear objetos que son similares, pero no se sabe de qué
tipo van a ser, o cuál se va a utilizar. Según la ejecución del programa, se decide qué clase se va a instanciar. */
function ConstructorSitios() {
    this.crearElemento = function(texto, tipo) {
        let html;

        if(tipo === 'input') {
            html = new InputHTML(texto);
        } else if(tipo === 'img') {
            html = new ImgHTML(texto);
        } else if(tipo === 'h1') {
            html = new HeadingHTML(texto);
        } else if(tipo === 'p') {
            html = new ParagraphHTML(texto);
        }

        html.tipo = tipo;
        html.mostrar = function() {
            const element = document.createElement(this.tipo);
            const divApp = document.getElementById('app');

            if(this.tipo === 'input') {
                element.setAttribute('placeholder', this.texto);
            } else if(this.tipo === 'img') {
                element.setAttribute('src', this.texto);
            } else {
                element.appendChild(document.createTextNode(this.texto));
            }

            divApp.appendChild(element);
        }

        return html;
    }
}

const InputHTML = function(texto) {
    this.texto = texto;
}

const ImgHTML = function(texto) {
    this.texto = texto;
}

const HeadingHTML = function(texto) {
    this.texto = texto;
}

const ParagraphHTML = function(texto) {
    this.texto = texto;
}

const sitioWeb = new ConstructorSitios();
const elementoWeb = [];
elementoWeb.push(
    sitioWeb.crearElemento('Contacto', 'input'),
    sitioWeb.crearElemento('logo.svg', 'img'),
    sitioWeb.crearElemento('Contáctanos en el formulario', 'h1'),
    sitioWeb.crearElemento('Bienvenidos a mi sitio web', 'p')    
);

elementoWeb.forEach(elemento => elemento.mostrar());
