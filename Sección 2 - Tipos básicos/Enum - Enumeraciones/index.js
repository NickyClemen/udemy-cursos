// Declaración de enum en Typescript.
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 2] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {})); /* Las enumeraciones son un tipo de dato que no existía en Javascript.
Tipo de dato para darle un sentido lógico a los números.
Es parecido a una clase/función.
Cuando se define una enum, la primera posición tiene un valor de 0, y va sumando uno.
Son a prueba de errores de parte de Typescript. */
var audio = Volumen.medio;
console.log(audio);
console.log(Volumen);
/* Son pares de valores ordenados. */
