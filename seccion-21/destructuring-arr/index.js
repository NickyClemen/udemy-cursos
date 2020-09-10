
const ciudades = ['Londres', 'New York', 'Madrid', 'París', { idioma: 'Inglés' }];
const cliente = {
    tipo: 'Premium',
    saldo: 3000,
    datos: {
        nombre: 'Nicole',
        apellido: 'Ordoqui',
        residencia: {
            ciudad: 'Lanús',
        }
    },
    movimientos: ['12/03/2018', '12/03/2018', '12/03/2018']
}

// Destructuring.
const [primeraCiudad, segundaCiudad] = ciudades;
const [, , , cuartaCiudad] = ciudades;
let { datos: { residencia }, movimientos: [uno] } = cliente;

console.log(primeraCiudad, segundaCiudad);
console.log(cuartaCiudad);
console.log(residencia);
console.log(uno);
