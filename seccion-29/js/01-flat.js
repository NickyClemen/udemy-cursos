const edades = [8,10,9, 11, [13,18, 20, [18,20,21]]];
console.log(edades.flat(2));
/* Ayuda a iterar arrays anidados. Se coloca el nivel del array al que se quiere llegar como parámetro.
Si se pone Infinity como parámetro, ingresa a todos lso niveles. */