/* Funciones de flecha - Arrow functions
Este tipo de funciones tienen una sintaxis bien variada, que depende de lo que quieras realizar.
Normalmente, tienen la misma estructura:
    1) Función con argumentos.
    2) Seguido de una flecha (=>).
    3) Seguido del cuerpo de la función. 
    
¿Para qué nos sirven? 
    1) Menos código que es más simple de interpretar.
    2) No hay un nuevo 'this' dentro de las funciones.
    3) No hay constructores. No tiene new.
    4) No se puede cambiar el valor del this aunque se use call(), apply() o bind().
    5) No hay objeto arguments. 

Técnicamente hablando, son funciones definidas con una nueva sintaxis que usa una flecha '=>', pero se comportan
de una forma muy diferente a las funciones normales con ES5. 
Tienen seis características principales:
    1) No hay creación de this, super, arguments y new.target. El valor de éstos objetos, apuntan directamente
    al objeto/función padre que no sea arrow function.
    2) No puede ser llamado con new. No tienen un constructor, en consecuencia, no pueden ser llamadas
    con new. 
    3) No hay prototype. 
    4) No pueden cambiar el this. 
    5) No hay objeto arguments. Ya no hay una relación con ese tipo de objeto, por lo que si se quiere 
    manejar ese tipo de parámetros, hay que depender del operador REST.
    6) No pueden tener nombres de parámetros duplicados. */