var a = new Boolean();
/* Al inicializarlo de ésta manera, el value por defecto es false. */
var b = new Boolean('-1');
/* Si se le envía un string, siempre devuelve true. Cualquier otro valor que se le envie, retorna
true.
1 - true. 
0 - false.
NaN - false.
null - false.
Infinity - false.
undefined - false.
string vacío - false. */
var c = new Boolean();

console.log(a);
console.log(b);
console.log(c.valueOf());

/* if (c) {

    console.log('Me imprimí.');

} // Cómo la variable está definida, retorna true, pese a ser false. Al ser un objeto, hay que
evaluarlo como tal. */
if (c.valueOf()) {

    console.log('Me imprimí.');

} // valueOf() -> Retorna el valor primitivo del objeto.

