const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const resetBtn = document.getElementById('resetBtn');
const formulario = document.getElementById('enviar-mail');

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', inicioApp);
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
    formulario.addEventListener('submit', enviarEmail);
    resetBtn.addEventListener('click', resetForm);
}

function inicioApp() {
    btnEnviar.disabled = true;
}

function validarCampo() {
    validarLongitud(this);

    if(this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if(errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

function validarLongitud(campo) {
    if(campo.value.length > 0) {
       campo.style.borderBottomColor = 'green';
       campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo) {
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function enviarEmail(e) {
    const loader = document.getElementById('loaders');
    const spinner = document.getElementById('spinner');
    const enviado = document.createElement('img');
    
    e.preventDefault();

    spinner.style.display = 'block';
    enviado.src = './img/mail.gif';
    enviado.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        loader.appendChild(enviado);

        setTimeout(() => {
            enviado.remove();
            formulario.reset();
        }, 2000);
    }, 3000);
}

function resetForm(e) {
    e.preventDefault();
    formulario.reset();
}


