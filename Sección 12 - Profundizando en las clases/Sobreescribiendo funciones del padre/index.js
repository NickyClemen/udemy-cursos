class Rectangulo {

    constructor(alto, largo) {

        this.alto = alto;
        this.largo = largo;

    }

    getArea() {

        return 'El área del rectángulo es de ' + this.alto * this.alto + '.';

    }

} 

class Cuadrado extends Rectangulo {

    constructor(alto){

        super(alto, alto);
       
    }

    getArea() {

        // return 'El área del cuadrado es de ' + this.alto * this.alto + '.';
        return super.getArea();
        // Llamar el método de la clase padre.

    }

}

let rectangulo = new Rectangulo(3, 2);
let cuadrado = new Cuadrado(3);

console.log(rectangulo.getArea());
console.log(cuadrado.getArea());

// Validaciones.
console.log(cuadrado instanceof Cuadrado);
console.log(cuadrado instanceof Rectangulo);