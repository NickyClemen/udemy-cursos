// ES5.
let persona = {

    saludar() {

        return 'Hola.';

    }

}

let amigo = {

    saludar() {

        // return Object.getPrototypeOf(this).saludar.call(this) + ", saludos!";
        // ES6.
        return super.saludar() + ', saludos';
        // Permite acceder al prototipo padre (heredado).
        /* Hay que tener cuidado al llamar a super si no hay una herencia de un prototipo. */

    }

}

// Object.setPrototypeOf(amigo, persona);

console.log(amigo.saludar());