/* Instalación de Babel:
    npm install --save-dev @babel/cli @babel/core @babel/preset-env @babel/register babel-lodader */
class Cliente {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

const cliente = new Cliente('Nicole');
console.log(cliente);
