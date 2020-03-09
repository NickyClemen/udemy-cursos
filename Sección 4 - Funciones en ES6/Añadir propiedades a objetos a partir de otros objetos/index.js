let personaUno = {

    nombre: 'Nicole',
    edad: '28',

} 

let personaDos = { 

    nombre: 'Cirilla',
    edad: 1,
    direccion: 'Santiago del Estero 3331',
    conduce: true, 
    vehiculo: true,
    vegetariano: false,
    casado: true

}

personaUno = {

    ...personaDos,
    // Se utiliza el operador spread para clonar las propiedades, y se las adjudica al objeto.
    /* Para mantener las propiedades de un objeto, una de las maneras de hacerlo, es usar el operador
    spead después. 
    Muy útil si se está trabajando con el patrón Redux, ya que en vez de clases, trabaja mucho con objetos, 
    o clases que vienen como argumentos de funciones. */
    ...personaUno,

}

personaUno.direccion = personaDos.direccion;
personaDos.direccion = 'Lavalle 422';

console.log(personaUno);
console.log(personaDos);