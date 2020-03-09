/* Las cookies es información que se quiere salvar en la máquina del cliente (para saber qué idioma
seleccionó, el correo electrónico de la persona, o el nombre de usuario). Cosas generales que no sean
sensibles para el funcionamiento de la página. */

// Función personalizada para crear cookies.
function crearCookie(nombre, valor) {

    // Hay que tener cuidado al 'escaparlas': Reemplzar caracteres que son problemáticos, por unos que no.
    // Escape.
    valor = escape(valor);

    var hoy = new Date();

    hoy.setMonth(hoy.getMonth() + 1);

    document.cookie = nombre+'='+valor+';expires=' + hoy.toUTCString()+';';
    /* Las cookies tienen una palabra reservada para el vencimiento: expires. */    

}

/* Escape.
var demo = "123;123*123'123/";
console.log(escape(demo));
// Reemplaza los valores comflictivos, por caracteres HTML.
console.log(unescape(escape(demo)));
// Hace lo contrario a escape. Recibe un valor escapado. */

// Eliminar una cookie.
function borrarCookie(nombre) {

    var hoy = new Date();

    hoy.setMonth(hoy.getMonth() - 1);

    document.cookie = nombre+'=x+;expires=' + hoy.toUTCString()+';';

}

// Obtener cookie.
function getCookie(nombre) {

    var cookies = document.cookie;

    var cookieArr = cookies.split('; ');

    console.log(cookieArr);

    for (var i = 0; i < cookieArr.length; i++) {

        var parArr = cookieArr[i].split('=');
        cookieArr[i] = parArr;

        if (parArr[0] === nombre) {

            return unescape(parArr[1]);

        }

    }

    return undefined;

}

/* Crear una cookie. Puede resistir reinicio de navegador web. Se le puede poner fecha de vencimiento.
Es buena práctica ponerles una fecha de vencimiento.
Las cookies residen en el navegador local. En Chrome, desde Settings se puede administrar las cookies. 
document.cookie = 'nombre=nicole';
document.cookie = 'apellido=ordoqui'; */

// Crear cookie.
crearCookie('nombre', 'cirilla');
crearCookie('correo', 'nicole.ordoqui@gmail.com');
crearCookie('direccion', 'Lanus, Argentina');

// Borrar cookie.
borrarCookie('nombre');

// Obtener cookie.
console.log(getCookie('correo'));

// Leer la cookie.
var cookies = document.cookie;
// La cookie es un string.

// console.log(cookies);