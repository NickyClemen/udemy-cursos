package ar.com.zireael.holamundo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication // Spring es un contenedor de clases Java (bins).
public class HolamundoApplication {

    public static void main(String[] args) {

        SpringApplication.run(HolamundoApplication.class, args);
        /* Se pasa la clase que se quiere ejecutar, y se pasan argumentos.
        Un controlador de tipo REST, permite enviar información al browser.
        Todas las clases tienen que estar en el mismo paquete (o subpaquete).
        @ComponentScan busca las clases dentro del mismo paquete. */
    }

}
