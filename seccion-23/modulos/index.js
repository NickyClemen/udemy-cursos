/* ¿Qué es un módulo?
En progaramción, un módulo nos permite agrupar funcionalidad relacionada en un mismo archivo, haciéndolo más mantenible
y organizado.
La ventaja principal, es que podremos utilizarlo únicamente donde sea requerido, dejando el resto del programa oculto
para el resto del código y también favorece la reutilización. 

Beneficios
    1) Dividir el código en pequeños archivos con funcionalidad relacionada.
    2) Un módulo puede ser utilizado fácilmente en otra aplicación.
    3) Dependencias.
    4) Evitan el conflicto con el nombre de las variables. 

¿Qué son las dependencias? 
Un módulo puede y debe estar conectado con otro módulo. Esa relación se conoce como dependencia.

Desventajas de usar muchos archivos de JS 
    1) cada script es un llamado HTTP, lo cuál hace el sitio más lento.
    2) cada script detiende la ejecución mientras se descarga.
    3) El manejo de las dependencias es manual: Si una función en el archivo B, se utiliza en el archivo A, habrá error.
    
Otras formas de utilizar módulos en JS
    1) Crear un archivo único.
    2) RequireJS y SystemJS fueron de las primeras librerías que lograron hacer algo cercano a los módulos en Javascript.
    Cargaban los distintos archivos con llamadas Ajax, pero esto a la larga termina siendo complicado para un proyecto grande. 
    3) Bundlers, preprocesadores y transpiladores: Browserify, Webpack y otros como Gulp y Grunt. */
