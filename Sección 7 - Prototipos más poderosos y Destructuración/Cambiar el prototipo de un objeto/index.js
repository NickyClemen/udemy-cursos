/* Prototipos
La OOP (Programación orientada a objetos) de Javascript se encuentra basada en prototipos y no en
clases (ES6 introduce Clases).

Los prototipos son un conjunto de normas para integrar OOP en Javascript. Pero con los prototipos,
nosotros somos capaces de realizar tareas como: 
    1) Herencia.
    2) Encapsulamiento.
    3) Abstracción.
    4) Polimorfismo. */

let gato = {

    sonido() {

        console.log('Miau');

    },

    chillido() {

        console.log('MIAU');

    }

}

let perro = {

    sonido() {

        console.log('Guau');

    }

}

let angora = Object.create(gato);
// Se pueden crear instancias con Object.create() o con new.

console.log(Object.getPrototypeOf(angora) === gato);
// Object.getPrototypeOf() -> Retorna el prototipo de un gato.

angora.sonido();
angora.chillido();

// Cambiarle el prototipo de un objeto.
Object.setPrototypeOf(angora, perro);
/* Dos parámetros:
    1) Objeto al que se le quiere cambiar el prototipo.
    2) El prototipo que se va a reemplazar. */

console.log(Object.getPrototypeOf(angora) === gato);
angora.sonido();
angora.chillido();