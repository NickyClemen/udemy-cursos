function Persona() {

    this.nombre = 'Nicole';
    this.apellido = 'Ordoqui';
    this.edad = 30;
    this.pais = 'Argentina';
 
}

/* Los prototipos sirven para agregar propiedades o métodos a los objetos.
Los prototipos pueden tener prototipos.
Se almacenan en el objeto __proto__ .
No se suelen usar para setear propiedades.
Se utilizan para hacer más eficiente el uso de lso objetos.
No hay límites en los prototipos. 
Todos son prototipos. Cuando JS encuentra una variable, inmediatamente le asigna el prototipo
del tipo de dato al que pertenece.
No es recomendable creale prototipos a las variables primitivas. */
// Persona.prototype.pais = 'Argentina';
Persona.prototype.imprimirInfo = function() {
    
    console.log(this.nombre + ' ' + this.apellido + ' (' + this.edad + ')' + '.');

}

var nicole = new Persona();

console.log(nicole);
nicole.imprimirInfo();