package abstracto.domain;

public class Rectangulo extends FiguraGeometrica {


    public Rectangulo(String tipoFigura) {

        super(tipoFigura);

    }

    public void dibujar() {

        System.out.println("Esto es un " + this.tipoFigura + ".");

    }

}
