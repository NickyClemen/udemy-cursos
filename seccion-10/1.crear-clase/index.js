class Cliente {
    constructor(nombre, apellido, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo; 
    }

    printSaldo() {
        return `Hola, ${ this.nombre }. Tu saldo es de ${ this.saldo }.`;
    }

    tipoCliente() {
        let tipo;

        if(this.saldo > 10000) {
            tipo = 'Gold';
        } else if(this.saldo > 5000) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }

        return tipo;
    }

    retirarSaldo(retiro) {
        return this.saldo -= retiro;
    }

    static bienvenida() {
        return `Bienvenide al cajero.`
    }
    // No hace falta instanciar para usar. Sirve para acceder a una propiedad o método de la clase.
}

const nicole = new Cliente('Nicole', 'Ordoqui', 10000);
nicole.retirarSaldo(4000);

console.log(Cliente.bienvenida());