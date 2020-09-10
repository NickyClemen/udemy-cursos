/* Observer: Patrón de comportamiento. También conocido como 'Subscriptor-Publicador'. */
let observer = {
    obtenerOfertas: function(callback) {
        if(typeof callback === 'function') {
            this.subscribers[this.subscribers.length] = callback;
        }
    },
    cancelarOfertas: function(callback) {
        for(let i = 0; i < this.subscribers.length; i++) {
            if(this.subscribers[i] === callback) {
                delete this.subscribers[i];
            }
        }
    },
    publicarOfertas: function(oferta) {
        for(let i = 0; i < this.subscribers.length; i++) {
            if(typeof this.subscribers[i] === 'function') {
                this.subscribers[i](oferta);
            }
        }
    },
    crear: function(objeto) {
        for(let i in this) {
            if(this.hasOwnProperty(i)) {
                objeto[i] = this[i];
                objeto.subscribers = [];
            }
        }
    }    
}

const udemy = {
    nuevoCurso: function() {
        const curso = 'Nuevo curso de Javascript';
        this.publicarOfertas(curso);
    }
}

const facebook = {
    nuevoAnuncio: function() {
        const oferta = 'Nuevo Xiaomi';
        this.publicarOfertas(oferta);
    }
}

const nicole = {
    compartir: function(oferta) {
        console.log(`Nicole comenta - ¡Excelente! ${ oferta }.`);
    }
}

const ivan = {
    interesa: function(oferta) {
        console.log(`Ivan comenta - Me interesa ${ oferta }.`);
    }
}

observer.crear(udemy);
observer.crear(facebook);

udemy.obtenerOfertas(nicole.compartir);
udemy.obtenerOfertas(ivan.interesa);
udemy.nuevoCurso();
udemy.cancelarOfertas(ivan.interesa);
udemy.nuevoCurso();

facebook.obtenerOfertas(nicole.compartir);
facebook.obtenerOfertas(ivan.interesa);
facebook.nuevoAnuncio();