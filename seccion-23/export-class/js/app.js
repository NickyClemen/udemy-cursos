// Si se quiere importar todo.
import * as cliente from "./cliente.js"; 

const info = cliente.mostrarInformacion(cliente.nombreCliente, cliente.ahorro);
let client = new cliente.Cliente(cliente.nombreCliente, cliente.ahorro);

console.log(cliente.nombreCliente);
console.log(cliente.ahorro);
console.log(info);
console.log(client);
console.log(cliente.mostrarInformacion());