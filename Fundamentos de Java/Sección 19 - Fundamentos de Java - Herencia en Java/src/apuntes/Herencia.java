package apuntes;

import java.util.Date;

public class Herencia {

    public static void main(String[] args) {

        Empleado empleado = new Empleado("Nicole", 5000);
        empleado.setEdad(28);
        empleado.setGenero('F');
        empleado.setDireccion("Las piedras 5226");
        System.out.println(empleado);

        Cliente cliente = new Cliente(new Date(), true);
        cliente.setNombre("Cirilla");
        cliente.setGenero('F');
        cliente.setEdad(1);
        cliente.setDireccion("Las piedras 5226");
        System.out.println(cliente);

    }

    /* Herencia
    Definir una jerarquía de clases, que permite heredar características entre clases padres e hijas.
     1) Permite representar un comportamiento en común.
     2) Evitar duplicación de código.
    La herencia permite representar características o comportamiento común entre clases, definiendo en la clase
    padre, los atributos o métodos que sean comúnes a las clases hijas.

    Con 'extends' hereda las caracteristicas de la clase padre. Todas las clases que no especifican de manera explícita
    un 'extends', entonces heredan de la clase Object, la cuál es la clase core de Java (pertenece al paquete
    java.lang).

            class Persona {} // Hereda de la clase Object (lo hace de manera implícita).
            class Empleado extends Persona {} // Definición de la clase Hija o Subclase.
            class Gerente extends Empleado {} // Definición de otra clase Hija o Subclase.

    Los atributos privados no se heredan (se heredan los métodos y atributos públicos).
    El encapsulamiento restringe la herencia.

    Uso de super y this
    La clase hija accede a los métodos y atributos de la clase padre con el método super dentro del constructor de
    la clase hija, para llamar al de la clase padre.

        class Persona {

            public Persona(String nombre) {

                this.nombre = nombre

            }

        } // Definición de la clase Padre o Super clase.

        class Empleado extends Persona {

            public Empleado(String nombre, double sueldo) {

                super(nombre); // super debe ser la primera instrucción dentro del constructor, ya que hace
                una llamada al constructor de la clase padre de la cuál está heredando (siempre que sean accesibles).
                this.sueldo = sueldo;

            }

            public static void main(String[] args) {

                Empleado empleado = new Empleado("Nicole", 25000);

            }

        } // Definción de una clase Hija o Subclase.
        this se usa para llamar a los atributos y métodos de la subclase, y super de la super clase.

      toString y super
      toString() se usa para mostrar el estado de un objeto (se hereda de la clase Object. Es el padre de todos
      los objetos en Java, sea de manera implícita o explícita).

      public class Persona {

        @Override -> Indica que se está sobreescribiendo un médoto heredado de una clase padre.
        public String toString() {

            return "Persona {" + "idPersona=" + idPersona
                               + ", nombre="  + nombre
                               + ", edad=" + edad + '}';

        }

      }

      public class Empleado extends Persona {

        @Override
        public String toString() {

            Primero mandamos a llamar toString() de Persona para que podamos observar los valores de la clase padre,
            y después imprimimos los valores de clase hija.
            return super.toString() + " Empleado {sueldo=" + sueldo + "}";

        }

      } */

}
