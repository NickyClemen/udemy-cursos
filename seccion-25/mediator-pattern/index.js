/* Mediator: Intermediario que se comunica con distitnos tipos de objetos. 
Variable del patrón Observer.
Mientras el Observer cer un objeto global, el Mediator localiza objetos ya definidos para objetos muy específicos. */
const Vendedor = function(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

const Comprador = function(nombre) {
    this.nombre = nombre;
}

const Subasta = function() {
    let compradores = {};

    return {
        registrar: function(usuario) {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

Vendedor.prototype = {
    oferta: function(articulo, precio) {
        console.log(`Tenemos el siguiente artículo ${ articulo }. Iniciamos en ${ precio }.`);
    },
    vendido: function(comprador) {
        console.log(`Vendido a ${ comprador }.`);
    }
}

Comprador.prototype = {
    oferta: function(mensaje, comprador) {
        console.log(`${ comprador.nombre }: Ofrezco ${ mensaje }`);
    }
}

const nicole = new Comprador('Nicole');
const ivan = new Comprador('Ivan');
const cirilla = new Comprador('Cirilla');

const vendedor = new Vendedor('Vendedor');

const subasta = new Subasta();

subasta.registrar(nicole);
subasta.registrar(ivan);
subasta.registrar(cirilla);

vendedor.oferta('Mustang 1966', 3000);

nicole.oferta(3500, nicole);
nicole.oferta(4000, ivan);
nicole.oferta(10000, cirilla);

vendedor.vendido(cirilla.nombre);