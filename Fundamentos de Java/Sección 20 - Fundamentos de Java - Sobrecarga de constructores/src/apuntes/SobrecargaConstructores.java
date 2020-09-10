package apuntes;

public class SobrecargaConstructores {

    public static void main(String[] args) {

        Persona persona = new Persona("Nicole", 28);
        System.out.println(persona);

        Empleado empleado = new Empleado("Cirilla", 1, 25000);
        System.out.println(empleado);

    }

    /* Sobrecarga de constructores
    Tiene que ver con ofrecer distintas opciones para la creación de un objeto de una clase
    en particular. Se logra creando distintos constructores con distintos argumentos. Se pueden diferencias
    por los argumentos que se le pasan. Es importante prestarle atención a los tipos de dato de los
    argumentos del constructor. Se le presta atención a eso, y al orden de definición.

    Uso de this en la sobrecarga de constructores

        public class Persona {

            // Constructor vacío.
            private Persona() {

                this.idPersona = ++contadorPersonas;

            } // No son accesibles desde otras clases.

            // Constructor sobrecargado.
            public Persona(String nombre, int edad) {

                this(); // Llamada del constructor vacío. Siempre tiene que ser la primera sentencia.
                Se puede llamar otros constructores con los tipos de dato y orden de argumentos. this tiene que ser
                la primera palabra para llamar a constructor.
                this.nombre = nombre;
                this.edad = edad;

            }

        }

     Uso de super en la sobrecarga de constructores

        public class Empleado extends Persona {

            private double sueldo;

            public Empleado(String nombre, int edad, double sueldo) {

                // super debe ser la primera línea.
                super(nombre, edad); -> Accede al constructor público de la clase padre.
                this.sueldo = sueldo;

            }

        }

     Orden de llamada de constructores
        1) Se manda a llamar el constructor de la clase que se está creando.
        2) Luego, se hace una llamada implícita a super (para llamar al constructor de la clase padre).
        Por default, llama al super() (constructor vacío).
        3) Todos los constructores terminan llamando al super() de Object. Es el que se encarga de reservar memoria
        de manera dinámica, entre varias tareas más (el constructor se manda a llamar en todos los casos en los que
        se crea un objeto).
        4) Cuando llega a Object, hace un retroceso para devolver el control al constructor de la clase hija. */

}
