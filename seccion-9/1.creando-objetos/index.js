// Object literal.
const cliente = {
    nombre: 'Nicole',
    saldo: 1200,
    tipoCliente: function() {
        let tipo;

        // Con this se acceden a los atributos del objeto.
        if(this.saldo > 1000) {
            tipo = 'Gold.';
        } else if(this.saldo > 500) {
            tipo = 'Platinum.';
        } else {
            tipo = 'Normal.'
        }

        return tipo;
    }
}

// ES5.
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function() {
        let tipo;

        if(this.saldo > 1000) {
            tipo = 'Gold.';
        } else if(this.saldo > 500) {
            tipo = 'Platinum.';
        } else {
            tipo = 'Normal.'
        }

        return tipo;
    }
}

const persona = new Cliente('Cirilla', 20000);
const person = new Cliente('Ivan', 6000);

console.log(cliente.tipoCliente());
console.log(cliente.saldo);

console.log(persona.tipoCliente());
console.log(person.tipoCliente());
