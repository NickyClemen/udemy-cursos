const client = {
    nombre: 'Nicole',
    tipo: 'Premium',
}

const cliente = {
    nombre: 'Ivan',
    tipo: 'Premium',
    datos: {
        ubicacion: { 
            ciudad: 'Lanús',
            pais: 'Argentina',
        },
        cuenta: {
            desde: '06-03-2019',
            saldo: 4000,
        },
    },
}

const newClient = {
    nombre: 'Cirilla',
    tipoCliente: 'Premium',
    saldo: 3000,
}

/* ES5.
let nombre = cliente.nombre;
let tipo = cliente.tipo; */

// ES6.
let { nombre, tipo } = client;

let { datos: { ubicacion } } = cliente;
let { datos: { cuenta } } = cliente;

// Valores por default.
let { nombe, tipoCliente = 'Básico', saldo = 0} = newClient;

console.log(nombre, tipo);

console.log(ubicacion);
console.log(cuenta);

console.log(nombre);
console.log(tipoCliente);
console.log(cuenta);    