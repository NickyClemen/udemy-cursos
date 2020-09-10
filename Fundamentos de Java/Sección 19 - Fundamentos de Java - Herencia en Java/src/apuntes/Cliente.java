package apuntes;

import java.util.Date;

public class Cliente extends Persona {

    private int idCliente;
    private Date fechaRegistro;
    private boolean vip;
    private static int contadorClientes;

    public Cliente(Date fechaRegistro, boolean vip) {

        this.idCliente = ++Cliente.contadorClientes;
        this.fechaRegistro = fechaRegistro;
        this.vip = vip;

    }

    public int getIdCliente() {

        return this.idCliente;

    }

    public Date getFechaRegistro() {

        return this.fechaRegistro;

    }

    public void setFechaRegistro(Date fechaRegistro) {

        this.fechaRegistro = fechaRegistro;

    }

    public boolean isVip() {
        return this.vip;
    }

    public void setVip(boolean vip) {

        this.vip = vip;

    }

    public static int getContadorClientes() {

        return Cliente.contadorClientes;

    }

    @Override
    public String toString() {

        return super.toString() + "Cliente{" +
                "idCliente=" + idCliente +
                ", fechaRegistro=" + fechaRegistro +
                ", vip=" + vip +
                '}';

    }
}
