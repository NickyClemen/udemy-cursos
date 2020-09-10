package abstracto.domain;

public class Circulo extends FiguraGeometrica {

    // Las subclases de métodos abstractos, están obligadas a sobreescribir los métodos.
    public Circulo(String tipoFigura) {

        super(tipoFigura);

    }

    public void dibujar() {

        System.out.println("Esto es un " + this.tipoFigura + ".");

    }

}
