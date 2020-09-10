package apuntes;

import datos.AccesoDatos;
import datos.ImplementacionMySql;
import datos.ImplementacionOracle;

public class Interfaces {

    public static void main(String[] args) {

        // Se puede crear un objeto de tipo interface, siempre que la clase implemente la interface.
        AccesoDatos datos = new ImplementacionOracle();
        ImplementacionMySql mysql = new ImplementacionMySql();

        datos.insertar();
        datos.listar();

        mysql.insertar();
        mysql.listar();

        System.out.println(datos.MAX_REGISTROS);

    }

    /* Interfaces
    En Java, sustituye el concepto de herencia múltiple, ya que se pueden implementar varias interfaces, pero
    heredar de una sola clase.
    Se utilizan para definir un comportamiento.
    Los atributos de una interface, por default, son públicos, finales y static.
    Los métodos, son estáticos, finales, y no contienen niguna implementación (son similares a los abstractos).
    Pueden heredar de otras interfaces, pero no de una clase.
    Las clases pueden implementar varias interfaces.
    No se pueden crear objetos de las interfaces, pero se pueden crear variables de tipo interface, que apunten a
    objetos que implementaron dicha interface. Por ésto, se aplica el polimorfismo.

    Clases abstractas vs. Interfaces
    Las clases abstractas, se usan para encapsular funcionalidad común entre las clases. Se extiende.
    Se utilizan para clases que tienen características en común.
    Una interface define un comportamiento, y no está relacionada con ninguna clase en especial. Se implementa.
    Se usan para definir comportamientos con clases no relacionadas entre sí.


        Definición
            <modificador> interface <nombre> [extends <interface padre>] {

                <atributos>
                <métodos>

            }

    */

}
