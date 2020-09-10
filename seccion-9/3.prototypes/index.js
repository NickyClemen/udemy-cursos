function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 1000) {
        tipo = 'Gold';
    } else if(this.saldo > 500) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal'
    }

    return tipo;
}

Cliente.prototype.mostrarDatos = function() {
    return `${ this.nombre }, tu saldo es de ${ this.saldo }. Tu categoría es ${ this.tipoCliente() }.`;
}

Cliente.prototype.retirarSaldo = function(retiro) {
    return this.saldo -= retiro;
}

const cl = new Cliente('Nicole', 100);
/* Todos los objetos en JS heredan de un proto.
Crear prototypes permite no tener los objetos sobrecargados, y ayudan a la organización.
Si se crean muchas funciones, se pueden utilizar en cualquier tipo de dato. */
const cl2 = new Cliente('Cirilla', 600);
const cl3 = new Cliente('Ivan', 1200);

console.log(cl);
console.log(cl.tipoCliente());
console.log(cl.mostrarDatos());
console.log(cl.retirarSaldo(50));

console.log(cl2);
console.log(cl2.tipoCliente());
console.log(cl2.mostrarDatos());
console.log(cl2.retirarSaldo(300));

console.log(cl3);
console.log(cl3.tipoCliente());
console.log(cl3.mostrarDatos());
console.log(cl3.retirarSaldo(700));
