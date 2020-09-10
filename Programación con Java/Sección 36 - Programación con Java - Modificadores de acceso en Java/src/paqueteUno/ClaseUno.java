package paqueteUno;

public class ClaseUno {

    public String atributoPublico = "Valor atributo público.";
    protected String atributoProtegido = "Valor atributo protegido";
    String atributoDefault = "Valor atributo default.";
    private String atributoPrivado = "Valor atributo privado.";

    public ClaseUno() {

        System.out.println("Constructor público vacío.");

    }

    public ClaseUno(String texto) {

        System.out.println("Constructor público con un argumento texto " + texto + ".");

    }

    protected ClaseUno(String texto, String text) {

        System.out.println("Constructor protected " + texto + text + ".");

    }

    ClaseUno(String texto, String text, String txt) {

        System.out.println("Constructor default.");

    }

    private ClaseUno(String texto, String text, String txt, String t) {

        System.out.println("Constructor private.");

    }

    public String metodoPublico() {

        return "Método público.";

    }

    protected String metodoProtected() {

        return "Método protected.";

    }

    String metodoDefault() {

        return "Método default.";

    }

    private String metodoPrivado() {

        return "Método privado.";

    }

}
