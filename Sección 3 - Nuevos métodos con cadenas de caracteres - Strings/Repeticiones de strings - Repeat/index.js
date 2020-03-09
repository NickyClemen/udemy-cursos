// El ES6 incorporó una función llamada repeat(), que es para duplicar un string. 
let texto = 'Hola mundo';
const ESPACIOS = 12;
let nombres =  ['Nicole', 'Cirilla', 'Ivan'];
let telefonos = ['11111111', '22222222', '33333333'];

console.log(texto.repeat(2));
// Lo repite la cantidad de veces que se especifique por parámetro.

for (i in nombres) {

    let dif = ESPACIOS - nombres.length;
    console.log(nombres[i] + ' '.repeat(dif) + '|' + ' ' + telefonos[i]);

}