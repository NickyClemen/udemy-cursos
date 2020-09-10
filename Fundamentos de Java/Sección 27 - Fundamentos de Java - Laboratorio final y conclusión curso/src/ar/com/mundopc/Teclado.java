package ar.com.mundopc;

public class Teclado extends DispositivoEntrada {

    private int idTeclado;
    private static int contadorTeclados;

    public Teclado(String tipoDeEntrada, String marca) {

        super(tipoDeEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclados;

    }

    @Override
    public String toString() {

        return "Teclado{" +
                "idTeclado=" + idTeclado +
                ", tipoDeEntrada=" + this.getTipoEntrada() +
                ", marca=" + this.getMarca() +
                '}';

    }
}
