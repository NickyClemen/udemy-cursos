/* Singleton: Objeto con una sola instancia. */
const alumnos = {
    listaAlumnos: [],
    get: function(id) {
        return this.listaAlumnos[id];
    },
    crear: function(datos) {
        this.listaAlumnos.push(datos);
    },
    listado: function() {
        return this.listaAlumnos;
    }
}

const infoAlumno = {
    nombre: 'Nicole',
    edad: 29,
}

const infoAlumno2 = {
    nombre: 'Cirilla',
    edad: 1,
}

alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);

const listado = alumnos.listado();
const alumno = alumnos.get(1);

console.log(listado);
console.log(alumno);