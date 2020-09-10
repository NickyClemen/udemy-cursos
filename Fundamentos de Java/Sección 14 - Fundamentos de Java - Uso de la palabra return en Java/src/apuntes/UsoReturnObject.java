package apuntes;

public class UsoReturnObject {

    public static void main(String[] args) {

        Suma suma = creaObjetoSuma();
        System.out.println("El resultado de la suma es " + suma.sumar() + ".");

    }

    private static Suma creaObjetoSuma() {

        return new Suma(4, 6);

    }

}

/* Se pueden crear varias clases en el mismo archivo, pero una sola puede ser de tipo public. */

class Suma {

    int a;
    int b;

    public Suma(int a, int b) {

        this.a = a;
        this.b = b;

    }

    public int sumar() {

        return this.a + this.b;

    }

}
