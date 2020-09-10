/* Builder: Es muy parecido al Factory. En Builder, se crea una abstracción (en Desarrollo de software, es una capa aparte
de la funcionalidad; no se programa sobre la funcionalidad). Builder es crear una abstracción para crear distintos tipos
de objetos. Es necesario agregar el tipo y el contenido del objeto. */
class Formulario {
    constructor() {
        this.campos = [];
    }

    agregarCampo(tipo, texto) {
        let campos = this.campos;
        let campo;

        switch(tipo) {
            case 'text':
                campo = new InputText(texto);
                break;
            case 'email':
                campo = new InputEmail(texto);
                break;
            case 'button':
                campo = new InputButton(texto);
                break;
            default:
                throw new Error(`Tipo de formato no válido ${ tipo }`);
        }

        campos.push(campo);
    }

    obtenerFormulario() {
        let form = document.createElement('form');
        let campos = this.campos.length;
        let campo;

        for(let i = 0; i < campos; i++) {
            campo = this.campos[i];
            console.log(campo);
            form.appendChild(campo.crearElemento());
            let br = document.createElement('br');
            form.appendChild(br);
        }

        return form;
    }
}

class Inputs {
    constructor(texto) {
        this.texto = texto;
    }
}

class InputText extends Inputs {
    constructor(texto) {
        super(texto);
    }

    crearElemento() {
        const inputText = document.createElement('input');

        inputText.setAttribute('type', 'text');
        inputText.setAttribute('placeholder', this.texto);

        return inputText;
    }
}

class InputEmail extends Inputs {
    constructor(texto) {
        super(texto);
    }

    crearElemento() {
        const inputEmail = document.createElement('input');

        inputEmail.setAttribute('type', 'email');
        inputEmail.setAttribute('placeholder', this.texto);

        return inputEmail;
    }
}

class InputButton extends Inputs {
    constructor(texto) {
        super(texto);
    }

    crearElemento() {
        const inputButton = document.createElement('button');

        inputButton.setAttribute('type', 'submit');
        inputButton.textContent = this.texto;
        return inputButton;
    }
}

const formulario = new Formulario();

formulario.agregarCampo('text', 'Añade tu nombre');
formulario.agregarCampo('text', 'Añade tu apellido');
formulario.agregarCampo('email', 'Añade tu email');
formulario.agregarCampo('button', 'Enviar formulario');

document.addEventListener('DOMContentLoaded', () => {
    const divApp = document.getElementById('app');
    divApp.appendChild(formulario.obtenerFormulario());
});
