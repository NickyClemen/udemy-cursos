package datos;

import excepciones.*;

public class ImplementacionMySql implements AccesoDatos {

    private boolean simularError;

    public boolean isSimularError() {

        return this.simularError;

    }

    @Override
    public void insertar() throws AccesoDatosEx {

        if(simularError) {

            throw new EscrituraDatosEx("Error de escritura de datos.");

        }

        System.out.println("Insertar desde MySQL.");

    }

    @Override
    public void listar() throws AccesoDatosEx {

        if(simularError) {

            throw new LecturaDatosEx("Error de lectura de datos.");

        }

        System.out.println("Listar desde MySQL.");

    }

    @Override
    public void simularError(boolean simularError) {

        this.simularError = simularError;

    }

}
