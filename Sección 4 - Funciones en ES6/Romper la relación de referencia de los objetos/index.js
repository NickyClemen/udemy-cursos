let personaUno = {

    nombre: 'Nicole',
    edad: '28'

} 

let personaDos = { ...personaUno };
/* Todos los objetos en JS son pasados por referencia, lo que hace que la asignación de
personaDos no sea una asignación por valor, sino a la ubicación en memoria dónde se encuentra
el objeto, por lo que si se cambia la "copia", en realidad, se está modficiando el original. 

El operador spread, lo que hace es extraer las propiedades el objeto, y se las adjudica
a la variable nueva. */

personaDos.nombre = 'Cirilla';

console.log(personaUno);
console.log(personaDos);