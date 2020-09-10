package apuntes;

import datos.*;
import excepciones.*;

public class ManejoExcepcionesDatos {

    public static void main(String[] args) {

        AccesoDatos datos = new ImplementacionMySql();
        datos.simularError(false);
        ejecutar(datos, "listar");

        AccesoDatos date = new ImplementacionOracle();
        date.simularError(true);
        ejecutar(date, "insertar");

    }

    private static void ejecutar(AccesoDatos datos, String accion) {

        if("listar".equals(accion)) {

            try {

                datos.listar();

            } catch (LecturaDatosEx lecturaDatosEx) {

                System.out.println("Error de lectura.");
                lecturaDatosEx.printStackTrace(System.out);

            } catch (AccesoDatosEx accesoDatosEx) {

                System.out.println("Error de acceso a datos.");
                accesoDatosEx.printStackTrace(System.out);

            } catch(Exception ex) {

                System.out.println("Error inesperado.");
                ex.printStackTrace(System.out);

            } finally {

                System.out.println("Finally.");

            }

        } else if("insertar".equals(accion)) {

            try {

                datos.insertar();

            }  catch (EscrituraDatosEx escrituraDatosEx) {

                System.out.println("Error de escritura.");
                escrituraDatosEx.printStackTrace(System.out);

            } catch (AccesoDatosEx accesoDatosEx) {

                System.out.println("Error de acceso a datos.");
                accesoDatosEx.printStackTrace(System.out);

            } catch(Exception ex) {

                System.out.println("Error inesperado.");
                ex.printStackTrace(System.out);

            } finally {

                System.out.println("Finally.");

            }

        } else {

            System.out.println("No se proporcionado una acción válida.");

        }

    }

}
