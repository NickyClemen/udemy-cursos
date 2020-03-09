let autoGuardado = {

    archivo: 'app.js',
    cursor: {

        linea: 7,
        columna: 16

    },
    ultimoArchivo: {

        archivo: 'index.js',
        cursor: {

            linea: 8,
            columna: 20

        }

    },
    otroNodo: {

        subNodo: {

            cursor: {

                linea: 11,
                columna: 11

            }

        }

    }

}

let { cursor:cursoActivo } = autoGuardado;
let { ultimoArchivo: { cursor:ultimoArchivo } } = autoGuardado;
let { otroNodo: { subNodo: { cursor: otroSuperNodo } } } = autoGuardado;
let otroSuperNodoDos = autoGuardado.otroNodo.subNodo.cursor;

console.log(cursoActivo);
console.log(ultimoArchivo);
console.log(otroSuperNodo);
console.log(otroSuperNodoDos);

