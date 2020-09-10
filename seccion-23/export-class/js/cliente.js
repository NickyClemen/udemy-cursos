export const nombreCliente = 'Nicole';
export let ahorro = 400;

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente ${ nombre } - Ahorro ${ ahorro }`
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente ${ this.nombre } - Ahorro ${ this.ahorro }`
    }
}