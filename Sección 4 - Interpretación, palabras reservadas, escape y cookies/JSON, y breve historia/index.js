/* Antiguamente, la única manera de compartir información entre aplicaciones, era con
archivos XML. 
En XML, las etiquetas se abren y cierran. En ocaciones, las etiquetas pesan más que la misma
información.
Es un problema muy serio cuando no se tienen datos ilimitados, o se está restringido al 3G 0
4G del celular. 

JSON -> Javascript Object Notation 
Prácticamente es cómo un objeto, pero los string que indican las propiedades, tienen que 
ir en comillas dobles. 
Puede crecer de manera indefinida; no hay un limitante. */

var objetoJs = {

    nombre: 'Nicole',
    apellido: 'Ordoqui',

}

var jsonString = JSON.stringify(objetoJs)
// Parsearlo a JSON.

var jsonObject = JSON.parse(jsonString);
// Parsea a string.

console.log(objetoJs);
console.log(jsonString);
console.log(jsonObject);