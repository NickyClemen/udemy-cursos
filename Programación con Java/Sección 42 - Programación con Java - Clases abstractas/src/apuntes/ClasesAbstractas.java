package apuntes;

import abstracto.domain.*;

public class ClasesAbstractas {

    /* Clases abstractas.
    Si la clase contiene un método abstracto, la clase también tiene que estar declarada de esa manera.
    Una clase abstracta, puede contener métodos abstractos y no abstractos.
    Un método abstracto no tienen cuerpo; termina con ';' (define la firma, pero no el comportamiento). Son
    las subclases las que se encargan de implementar le método.

    Restricciones
    No se pueden instanciar. Se pueden crear variables del tipo de la clase abstracta que almacenen referencias
    a subclases. */

    public static void main(String[] args) {

        FiguraGeometrica rectangulo = new Rectangulo("rectángulo");
        FiguraGeometrica triangulo = new Triangulo("triángulo");
        FiguraGeometrica circulo = new Circulo("círculo");

        rectangulo.dibujar();
        triangulo.dibujar();
        circulo.dibujar();

    }

}
