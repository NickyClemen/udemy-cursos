// Declaración de enum en Typescript.
enum Volumen {

    min = 1,
    medio,
    max = 10,

} /* Las enumeraciones son un tipo de dato que no existía en Javascript.
Tipo de dato para darle un sentido lógico a los números.
Es parecido a una clase/función.
Cuando se define una enum, la primera posición tiene un valor de 0, y va sumando uno.
Son a prueba de errores de parte de Typescript. */

let audio:number = Volumen.medio;
console.log(audio);
console.log(Volumen);
/* Son pares de valores ordenados. */








