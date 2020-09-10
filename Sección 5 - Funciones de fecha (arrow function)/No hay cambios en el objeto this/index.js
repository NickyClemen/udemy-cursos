// ES5.
var manejador = {

    id: '123',
    init: function() {

        document.addEventListener('click', (function(event) {

            this.clickEnPagina(event.type);
            console.log(this);
            // Hay que atar el this, porque está apuntando al objeto global (document).

        }).bind(this), false);
        /* En el addEventListener, el tercer parámetro optativo, es un boolean que define si se quiere
        ejecutar la función inmeditamente al ser creada. */

    }, /* Por lo general, poner init es un standard para definir a una función que se puede ejecutar cuando
    el objeto es creado. */
    clickEnPagina: function(type) {

        console.log('Manejando ' + type + ' para el ID ' + this.id + ".");

    }

}

manejador.init();

// ES6.
var manejadorDos = {

    id: '456',
    init: function() {

        document.addEventListener('click', (event) => this.clickEnPagina(event.type));
        
    },
    clickEnPagina: function(type) {

        console.log('Manejando ' + type + ' para el ID ' + this.id + ".");

    }

}

manejadorDos.init();