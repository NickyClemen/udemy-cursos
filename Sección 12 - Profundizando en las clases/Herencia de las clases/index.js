class Rectangulo {

    constructor(alto, largo) {

        this.alto = alto;
        this.largo = largo;

    }

    getArea() {

        return this.alto * this.alto;

    }

} 

class Cuadrado extends Rectangulo {

    constructor(alto){

        super(alto, alto);
        /* Hace referencia a la clase padre. 
        Si se lo deja super(), solamente ejecuta el constructor del padre. */

    }

} // Herencia de clases.

let rectangulo = new Rectangulo(3, 2);
let cuadrado = new Cuadrado(3);

console.log(rectangulo.getArea());
console.log(cuadrado.getArea());

// Validaciones.
console.log(cuadrado instanceof Cuadrado);
console.log(cuadrado instanceof Rectangulo);