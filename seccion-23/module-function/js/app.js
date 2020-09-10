import { nombreCliente, ahorro, mostrarInformacion, mostrarNombre } from "./cliente.js";
/* Si se quiere importar todo.
import * as cliente from "./cliente"; */

const info = mostrarInformacion(nombreCliente, ahorro);
const nombre = mostrarNombre(nombreCliente);

console.log(nombreCliente);
console.log(ahorro);
console.log(info);
console.log(nombre);