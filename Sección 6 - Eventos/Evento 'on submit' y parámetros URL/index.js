/* onSubmit se puede utilizar antes de que el formulario se envié al servidor. */
function validar() {

    var nombre = document.getElementById('txtNombre').value;
    var apellido = document.getElementById('txtApellido').value;

    if (nombre.length < 1) {

        return false;

    }

    if (apellido.length < 1) {

        return false;

    }

    return true;

}

// Obtener parámetros del URL.
function getParamURL(name) {

    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null

}

console.log(getParamURL('txtNombre'));