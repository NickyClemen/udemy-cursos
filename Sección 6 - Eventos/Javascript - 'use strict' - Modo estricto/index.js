/* 'use strict' -> No puede confiar del todo, ya que diferentes browser lo interpretan de distintas
maneras. Hace que sea más riguroso en las evaluaciones.
Hay que tener cuidado en el uso, porque esto se setea en todos los archivos, hasta en los que no se
seteó.
Se lo puede usar dentro de funciones.
Si se quiere usar el 'use strict' solamente en un archivo, se debe encapsular en una función
que se ejecute inmediatamente. 

    (function() {
        
        'use strict';
        ...
        
    })(); */