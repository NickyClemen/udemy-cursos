class Cuadrado<T extends number> {

  base:T;
  altura:T;
  area():number {

    return +this.base * +this.altura; // '+' (operador unario) castea de string a number. 

  }

} // <T extends number> -> Se limita el genérico a los números y strings.

let cuadrado = new Cuadrado();

cuadrado.base = 10;
cuadrado.altura = 10;
console.log(cuadrado.area());
