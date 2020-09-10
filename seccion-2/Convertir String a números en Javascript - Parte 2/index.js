let dato;
dato = Number('20');
dato = Number('20.10931');
dato = Number(true);
dato = Number(false);
/* Cuando se convierne un boolean, devuelve su equivalente numérico:
    a) true: 1.
    b) false: 0. */
dato = Number(null);
// Retorna 0.
dato = Number(undefined);
// Retorna NaN.
/* Strings no numéricos y arrays, retorna NaN. */

// parseInt() (enteros)
dato = parseInt('100');

// parseFloat() (decimales)
dato = parseFloat('100.2030');

/* toFixed() -> Sólo aplica a number. Sirve para redondear decimales.
Se puede combinar con tras funciones. */
dato = 18929173.987654321;

console.log(dato.toFixed(3));
console.log(typeof dato);

