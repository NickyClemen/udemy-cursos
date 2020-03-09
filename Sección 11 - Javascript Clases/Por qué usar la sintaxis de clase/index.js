/* ¿Por qué usar la sintaxis de clase?
    1) Las clases funcionan muy parecido a la declaración LET.
    2) Todo código dentro de la clase, funciona en 'strict mode'.
    3) Todos los métodos no son enumerables.
    4) Todos los métdos internos, no tienen un constructor, por consecuencia, no se pueden llamar
    con el método new.
    5) Llamar una clase sin el new, dará un error.
    6) Intentar renombrar el nombre de la clase dentro de algún método de la misma, dará error.
    7) Tienen métodos estáticos y métodos privados. */