// Objeto Date().
const diaHoy = new Date();
// Por default, retorna la fecha del día.

// Fecha específica (mes, día y año).
let navidad = new Date('12-25-2017'); 

let valor;

// Mes.
valor = diaHoy.getMonth();

// Día actual.
valor = diaHoy.getDate();
valor = diaHoy.getDay();

// Año.
valor = diaHoy.getFullYear();

// Minutos de la hora en la que estamos.
valor = diaHoy.getMinutes();

// Hora en la que estamos.
valor = diaHoy.getHours();

// Milisegundos desde 1970.
valor = diaHoy.getTime();

// Cambiar el año.
valor = diaHoy.setFullYear(2016);
valor = diaHoy.getFullYear();

// get es para consultarlo, set para sobreescribirlo/agregarlo.

console.log(diaHoy);
console.log(navidad);
console.log(valor);
