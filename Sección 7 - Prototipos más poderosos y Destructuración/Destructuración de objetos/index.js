let ajustes = {

    nombre: 'Nicole Ordoqui',
    email: 'nicole.ordoqui@gmail.com',
    facebook: 'nickyclemen13',
    google: 'nickyclemen13',
    premium: true,
    twitter: '@nicky'

}

// let { nombre, email, facebook, google, premium } = ajustes;
/* Destructuración de objetos. "Desmenbrar" un objeto para crear otros de manera automática.
No olvidar la inicialización del objeto. */

/* Cambiarle el nombre a la variable.
let { nombre, email, facebook, google, premium: dePago } = ajustes; */

/* Permite la inicialización de variables aunque no existan.
let { premium: dePago, nombre, google, twitter = '@nickyclemen' } = ajustes; */
// No importa el orden de las variables.

// Crear una variable con un valor por defecto.
let { premium: dePago, nombre, google, twitter:CuentaTwi = '@nickyclemen' } = ajustes;
// Si existe la variable, desecha el valor por defecto.

console.log(CuentaTwi);