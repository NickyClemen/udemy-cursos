/* Scope
El ámbito de una variable es la zona del programa en la que se define la varibale.
Javascript define dos ámbitos:
    1) Global.
    2) Función. */

// var mensaje = 'Hola Mundo';

/* Si no se está trabajando dentro de una función, se está en el scope global, sino, en el de una función. 
Cuando se está en el global scope, las variables se encuentran dentro del objeto window. */    
  
/*  let mensaje = 'Hola Mundo'; 
console.log(mensaje);
   
Cuando el navegador lee todo el programa, y se encuentra con una variable que está llamada antes
de ser inicializada, da undefinir. Toda variable en Javascript tiene un valor por defecto,
que es el undefined, por lo que no da error cuando no hay una variable declarada antes de su llamado.
Cuando la variable está inicializada en let, el programa busca una inicializada en var, y tira en undefined, 
pero con let, obliga a que la variable tenga que existir previamente a ser usada. */

let mensaje = '123';

if (1 === 1) {

    // var mensaje = 'Hola mundo.';
    mensaje = 'Hola mundo.';

} /* Aunque un if es una función porque el bloque se ejecuta solamente si se cumple el condicional,
no es explícita. Una explícita, es cuando dice function o una anónima.
La varibale inicializada en var dentro del bloque If, al ser llamada afuera, da undefined, pero con let,
marca el error.
Lo que pasa, es que el inicializador let, construye la variable dentro del bloque If. Cuando se termina
de ejecutar la instrucción, la varible ya no existe. 
let ayuda a definir el ciclo de vida que va a tener esa variable, y nos obliga a inicializarlas antes de
usarlas. */

console.log(mensaje);




