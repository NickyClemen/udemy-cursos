function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

function Empresa(nombre, saldo, telefono, tipo) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}

Cliente.prototype.mostrarDatos = function() {
    return `${ this.nombre }, tu saldo es de ${ this.saldo }.`;
}

// Heredar prototype.
Empresa.prototype = Object.create(Cliente.prototype);

const cl = new Cliente('Nicole', 100);
const empresa = new Empresa('Udemy', 1000000, '44444-4444', 'Educación');

console.log(cl.mostrarDatos());
console.log(empresa.mostrarDatos());

