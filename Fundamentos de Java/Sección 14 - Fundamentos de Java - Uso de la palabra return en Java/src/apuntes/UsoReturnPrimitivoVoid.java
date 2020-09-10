package apuntes;

public class UsoReturnPrimitivoVoid {

    /* Hay tres maneras de salir de un método en Java.
        1) Utilizar la palabra 'return'. Se pude poner 'return' solo. No hace falta ponerlo para devolverle
         el control al método. return junto a un valor. Corresponde al tipo de dato declarado en el método.
        2) Al llegar al final de un método. Se hace return de manera implícita.
        3) Ocurre un error. */

    public static void main(String[] args) {

        sumarSinRetornarValor(3, 6);
        sumarRetornandoValor(2, 4);

    }

    private static void sumarSinRetornarValor(int a, int b) {

        System.out.println("El resultado de la suma sin retorno es de " + (a + b) + ".");
        return; // Es opcional.

    } // void especifica que no se retorna valor.

    private static int sumarRetornandoValor(int a, int b) {

        return (a + b); // Retorna el valor del tipo de dato declarado en el método.
        /* Retorna valores simples (un solo valor).
        Para poder ver el resultado, se aconseja almacenar el resultado del método en una variable. */

    }

}
