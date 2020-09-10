class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo; 
    }

    printSaldo() {
        return `Hola, ${ this.nombre }. Tu saldo es de ${ this.saldo }.`;
    }

    static bienvenida() {
        return `Bienvenide al cajero.`
    }
}

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }

    static bienvenida() {
        return `Bienvenide al cajero para empresas.`
    }
}

const cliente = new Cliente('Nicole', 10000);
const empresa = new Empresa('Udemy', 10000, 44444444, 'Educación');

console.log(cliente.printSaldo());
console.log(empresa.printSaldo());
console.log(Empresa.bienvenida());
