/* Hay dos maneras de definir expresiones regulares en JS:
    1) Explicíta, usando el constructor.
    2) Usando un literal. */

/* 1)
var regUno = RegExp('a'); */

// 2)
var regDos = /a/;

var texto = 'Aeropuerto.';
var suma = 'La Respuesta de la suma es: 45 + 60 = 105.';

// Método de lso strings para usar con expresiones regulares.
var arr = texto.match(/\w{2,2}/ig);
var arrDos = suma.match(/\d{1,}|respuesta/ig);
/* Si coincide, regresa un arrays, sino, null. */
console.log(texto);
console.log(arr);
console.log(arrDos);

/* Hay dos caracteres especiales que cambian de acuerdo al contexto: 
    1) ^ (/^a/): Le dice a la expresión regular, que busque en la primera posición
    a ver si encuentra el filtro. Busca en la primera parte.
    2) $ (/a$/): Busca en la última parte del string.
    3) . (/.a/): Devuelve caracteres por cantidad de puntos.
    4) /^.o/: Primer caracter, no importa cuál sea, que siga una 'o'.
    5) []: Se utiliza para definir rangos. 
    6) \s: Se utiliza para saber si hay separaciones.
    7) \w: Filtra cualquier palabra. Abreviatura de [a-zA-Z0-9].
    8) \d: Filtrar solo números. Abreviatura de [0-9].
    9) |: Funciona como caracter lógico 'o'.
    
Las expresiones regulares tienen tres controladores. Se escriben al final de la expresión.
    1) i: Que sea insensible a mayúsculas y minúsculas.
    2) g: Todas las apariciones.
    3) m: Multilínea.
Se pueden combinar. 

Operadores de repetición (buscan patrones repetitivos).
    1) +: Estar seguro que aparece una o más veces.
    2) ?: Aparece o no aparece.
    3) *: Cero o más veces. 
'?' y '*' hacen match aunque el string esté vacío.
    4) {}: Define la cantidad de veces que aparece un caracter. Se puede establecer
    un rango. */
