// Tres tipos de inicializadores. Uno de ellos, es la fecha.
// var hoy = new Date();
var inicio = new Date();

/* Devuelve la fecha en el idioma configurado en la PC. Se no se le pasa parámetros,
toma la hora del momento. */
// var fechaMilisegundos = new Date(0);
// var fFija = new Date(2016, 9, 21, 23, 10, 15);
/* Puede recibir siete argumentos.
    1) Año.
    2) Mes: Los meses en Javascript son con base cero.
    3) Día.
    4) Hora: Las horas son con formato 24. Si se pone 24, suma un día más.
    5) Minuto.
    6) Segundo.
    7) Milisegundo. */

// Métodos.
/* console.log(hoy.getFullYear());
// Obtener el año. No confundir con getYear() (retorna fechas con otro formato. Está deprecado). */

/* console.log(hoy.getDate());
// Retorna el día. */

/* console.log(hoy.getHours());
// Retorna la hora. */

/* console.log(hoy.getMilliseconds());
// Retorna los milisegundos. */

/* console.log(hoy.getMonth());
// Retorna el mes. */

/* console.log(hoy.getSeconds());
// Retorna los segundos. */

// console.log(hoy.getTime());
/* Retorna la representación numérica en milisegundos de una fecha.
Se puede utilizar para saber cuánto demora un proceso en ejecutarse. */

for (var i = 0; i < 15000; i++) {

    console.log('Algo...');

}

var fin = new Date();

/* console.log(hoy);
console.log(fechaMilisegundos); 
console.log(fFija); */
/* console.log(inicio);
console.log(fin); */

var duracion = fin.getTime() - inicio.getTime();

console.log(duracion/1000);
// Convertir a segundos.