/* Composition: Escribir funciones y asignarlas al objeto deseado.
No es recomendado usar un god object (clase principal). */
const obtenerNombre = (info) => ({
    mostrarNombre() {
        console.log(`Nombre: ${ this.nombre }.`);
    }
});

const guardarEmail = (info) => ({
    email(email) {
        console.log(`Guardando email en ${ info.nombre }.`);
        info.email = email;
    }
});

const obtenerEmail = (info) => ({
    mostrarEmail() {
        console.log(`Email: ${ info.email }.`);
    }
});

const obtenerEmpresa = (info) => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${ this.empresa }.`);
    },
});

const obtenerPuesto = (info) => ({
    mostrarPuesto() {
        console.log(`Puesto: ${ this.puesto }.`);
    }
});

function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa,
    }

    return Object.assign(
        info, 
        obtenerNombre(info), 
        guardarEmail(info), 
        obtenerEmail(info), 
        obtenerEmpresa(info)
    );
}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto,
    }

    return Object.assign(
        info, 
        obtenerNombre(info), 
        guardarEmail(info), 
        obtenerEmail(info), 
        obtenerPuesto(info)
    );
}

const cliente = new Cliente('Nicole', null, 'Udemy');
cliente.mostrarNombre();
cliente.email('cliente@cliente.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

const empleado = new Empleado('Ivan', null, 'Programador');
empleado.mostrarNombre();
empleado.email('empleado@empleado.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();

