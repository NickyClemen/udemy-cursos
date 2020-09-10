package ar.com.mundopc;

public class Raton extends DispositivoEntrada{

    private int idRaton;
    private static int contadorRatones;

    public Raton(String tipoDeEntrada, String marca) {

        super(tipoDeEntrada, marca);
        this.idRaton = ++Raton.contadorRatones;

    }

    @Override
    public String toString() {

        return "Raton{" +
                "idRaton=" + this.idRaton +
                ", tipoDeEntrada=" + this.getTipoEntrada() +
                ", marca=" + this.getMarca() +
                '}';

    }
}
