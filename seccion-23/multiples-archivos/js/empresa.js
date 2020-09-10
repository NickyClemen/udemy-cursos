import { Cliente } from './cliente.js';

export const nombreEmpresa = 'Udemy';
export let ahorro = 4000000;
export const categoria = 'Educación';

export function mostrarInformacion(nombre, ahorro, categoria) {
    return `Empresa ${ nombre } - Ahorro ${ ahorro } - Categoría ${ categoria }`
}

export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }

    mostrarInformacion() {
        return `Cliente ${ this.nombre } - Ahorro ${ this.ahorro } - Categoría ${ this.categoria }`
    }
}