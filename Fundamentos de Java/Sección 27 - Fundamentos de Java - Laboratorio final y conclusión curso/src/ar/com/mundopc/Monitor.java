package ar.com.mundopc;

public class Monitor {

    private int idMonitor;
    private String marca;
    private double tamanio;
    private static int contadorMonitores;

    private Monitor() {

        this.idMonitor = ++Monitor.contadorMonitores;

    }

    public Monitor(String marca, double tamanio) {

        this();
        this.marca = marca;
        this.tamanio = tamanio;

    }

    public int getIdMonitor() {

        return this.idMonitor;

    }

    public String getMarca() {

        return this.marca;

    }

    public void setMarca(String marca) {

        this.marca = marca;

    }

    public double getTamanio() {

        return this.tamanio;

    }

    public void setTamanio(double tamanio) {

        this.tamanio = tamanio;

    }

    public static int getContadorMonitores() {

        return Monitor.contadorMonitores;

    }

    @Override
    public String toString() {

        return "Monitor{" +
                "idMonitor=" + idMonitor +
                ", marca='" + marca + '\'' +
                ", tamanio=" + tamanio +
                '}';

    }

}
