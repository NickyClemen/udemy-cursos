interface DosNumerosFunc {
/* En las interfaces para funciones, no se definen propiedades; sólo métodos. */
  (numberOne:number, numberDos:number) : number;
  // Parámetros de entrada : Salida.

}

let sumar:DosNumerosFunc;
sumar = function(a:number, b:number):number {

  return (a + b);

}

let restar:DosNumerosFunc;
restar = function(a:number, b:number):number {

  return (a - b);

}
