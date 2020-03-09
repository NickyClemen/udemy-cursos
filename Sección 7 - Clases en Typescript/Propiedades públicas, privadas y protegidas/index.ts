class Avenger {

  public nombre:string;
  protected equipo:string;
  private nombreReal:string;
  private puedePelear:boolean = false;
  private peleasGanadas:number = 0;

  constructor(nombre:string, equipo:string, nombreReal:string) {

    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;

  }

}

let antman:Avenger = new Avenger('Antman', 'Cap', 'Scott Lang');
console.log(antman);

antman.nombre = 'Nick Fury';

/* En OOP, éstos atributos son más que necesarios (public, private, protected). Controlan desde dónde
pueden ser accesadas las clases. En JS, todas las clases y métodos son públicos.
Por defecto, es público.

public -> Puede ser accesada desde cualquier parte del programa.
protecte -> Puede ser accesada desde la clase o sus subclases (herencias).
private -> Pueden ser modificadas dentro de la misma clase. */
