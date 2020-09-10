package apuntes;

public class Apuntes {
    /* Buenas prácticas y patrones de diseño
            Capa de presentación: Administra el flujo y presentación del las pantallas del sistema.
            Porcesa la información y se la muestra al usuario.
            Capa de negocio: Procesa la lógica del negocio y/o servicios de sistema.
            Cada de datos: Obtiene y guarda información de las fuentes de datosm como son: Una DDBB, archivos, etc.
        Cohesión y acoplamiento
            1) El objetivo del diseño, es minimizar costos de desarrollo.
            2) La cohesión es la medida en la que un componente de software se dedica a realizar sólo la tarea para la cuál
            fue creada, delegando las tareas complementarias a otros componentes.
            3) El acoplamiento es la medida en que los cambios de un componente tiende a necesitar cambios de otros
            componentes.
            4) El objetivo del diseño de software, es tener una alta cohesión y un bajo acomplamiento entre sus componentes.
        Las capas se intercomunican entre sí.

    Patrones de diseño
        Capa de presentación
            1) MVC (Model View Controller).
            2) Front Controller: Proporciona una entrada única cuando el user hace una petición.
            3) DTO (Data Transfer Object): Representa un objeto del dominio del problema.
            Una Entity Class, la cuál se persiste/guarda en una base de datos. Se usa para transferir una clase/clases entre
            capas.

        Capa de servicio
            1) Business Delegate: Se encarga de los detalles de llamar métodos de servicio.
            2) Service Locator: Lo usa Busness Delegate para encontrar directorios de servicio.
            3) DTO.

        Capa de datos
            1) DAO (Data Access Object): Extrae y almacena información en la base de datos.
            2) DTO. */
}
