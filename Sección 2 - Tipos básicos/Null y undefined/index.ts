/* null y undefined pueden asignarse entre sí. */

let ironman:string;
ironman = 'Tony';
ironman = undefined; // Acepta el cambio de tipo de dato.
/* Para evitarlo, hay que configurar el tsconfig con el strictNullChecks. 
Impide igualar las variables a null y undefined. 
Sin la restricción no pasa, porque son valores permitidos. */