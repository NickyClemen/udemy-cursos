/* Webpack Dev Server: Servidor provisto por Webpack.
    npm install webpack-dev-server --save-dev */
import '../scss/style.scss';

const clients = document.getElementById('clientes');
const clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3', 'Cliente 4', 'Cliente 5'];
let html = '';

clientes.forEach(cliente => {
    html += `
        <li>${ cliente }</li>
    `;
});

clients.innerHTML = html;
