/* Storage en el cliente.
    1) Guardar datos en el browser. 
    2) No se recomienda usar cookies, porque guardan los archivos en la computadora. No están cifrados. Son inseguras.
    3) Se recomienda guardar pocos datos, nada que sea importante. Lo importante se almacena en el servidor. 
    
Opciones
    1) Web Storage
        a) Local Storage. No se recomienza guardar información sensible (es específico del dominio). 
        Ideal para productos temporales.
        b) Session Storage. Recomendado para información sensible (nombre, ciudad). Productos temporales.
        Información temporal.
    Solamente pueden guardar strings (no objetos, no arras, no archivos). Son bastante limitados.
    
    2) IndexedDB
        a) IndexedDB.
            1) Puede almacenar grandes cantidades de datos estructurados, incluso archivos.
            2) Utiliza indexes para ser más rápido el acceso a los datos.
            3) Recomendado para grandes cantidades de datos.
            
            Características.
                1) Es una base de datos completa.
                2) Puede guardar arrays, objetos, imágenes y videos. 
                3) Datos estructurados con una key (key-value).
                4) Es asíncrono.
                
            Desventajas.
                1) No se puede sincronizar con el backend.
                2) No se puede utilizar en modo privado (al cerrar, se pierde todo).
                3) El límite de datos lo pone el browser. 
                4) Si se limpian los datos, se pierde todo. */