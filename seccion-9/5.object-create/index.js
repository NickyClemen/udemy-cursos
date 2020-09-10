const Cliente = {
    printSaludo: function() {
        return `Hola, ${ this.nombre }. Tu saldo es de $${ this.saldo }.`
    },
    retirarSaldo: function(retiro) {
        return this.saldo -= retiro;
    }
}

const nicole = Object.create(Cliente);
nicole.nombre = 'Nicole';
nicole.saldo = 1000;

console.log(nicole.printSaludo());


