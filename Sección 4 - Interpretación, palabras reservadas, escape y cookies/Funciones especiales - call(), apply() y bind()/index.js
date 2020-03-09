/* Las funciones tienen tres funciones en su prototipo:
    1) call(object, parámetros): El primer parámetro es el contexto al que se quiere atar a la función.
    Invica a la función. Luego del this, los parámetros va separados por coma.
    2) apply(): El primer parámetro es el contexto al que se quiere atar a la función.
    Invica a la función. Luego del this, los parámetros se pasan en un array.
    Solamente admite dos parámetros. Es útil cuando se desconocen la cantidad de parámetros.
    3) bind(object): Se le pasa como parámetro el contexto al que quiere atar a la función.
    No invoca a la función, invoca al this.
    
Diferencia entre el call() y el apply(): Son casi iguales, exceptuando que en el apply, se esperan
solamente dos parámetros. 

Tod esto sirve para las 'funciones prestadas'. */