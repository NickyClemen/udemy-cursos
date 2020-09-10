import * as cliente from "./cliente.js";
import { 
    nombreEmpresa,
    ahorro as ahorroEmpresa,
    categoria, 
    mostrarInformacion as mostrarInformacionEmpresa,
    Empresa
} from './empresa.js';
/* Cuando hay importaciones que coinciden con otras, se puede crear un alias. */

const info = cliente.mostrarInformacion(cliente.nombreCliente, cliente.ahorro);
let client = new cliente.Cliente(cliente.nombreCliente, cliente.ahorro);

const infoEmpresa = mostrarInformacionEmpresa(nombreEmpresa, ahorroEmpresa, categoria);
let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);

// Cliente.
console.log(cliente.nombreCliente);
console.log(cliente.ahorro);
console.log(info);
console.log(client);
console.log(client.mostrarInformacion());

// Empresa.
console.log(nombreEmpresa);
console.log(ahorroEmpresa);
console.log(categoria);
console.log(infoEmpresa);
console.log(empresa.mostrarInformacion());