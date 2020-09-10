/* WeakSets -> Trabajan de una manera muy parecida a los Sets.
Los Sets normales, son conocidos como Strong Set por la manera en la que permite
almacenar la información, realizar índices, búsquedas directas, o almacenar cualquier tipo
de dato.
La diferencia, es que el WeakSet tiene un manejo de la información diferente.

Características principales:
    1) En un weakset, add(), has() y remove(), dan un error si enviamos como parámetro algo que
    no sea un objeto.
    2) No tiene manera de hacer repeticiones o ciclos for in. 
    3) No tienen keys(), values(), por lo que no hay manera, vía programación, de saber cuántos
    elementos hay dentro.
    4) No tienen un forEach tampoco.
    5) No tiene propiedad size. 
    
Sirven para almacenar referencia a los objetos (únicamente).*/
    let set = new WeakSet();

    let personaUno = {

        nombre: 'Nicole',

    }

    let personaDos = {

        nombreDos: 'Cirilla',

    }

    set.add(personaUno);
    set.add(personaDos);

    set.delete(personaUno);

    console.log(set);