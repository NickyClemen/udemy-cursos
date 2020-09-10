/* Electron fue desarrollado por GitHub. Permite crear apps de escritorio con HTML, CSS y JS.
Utiliza Chromium y Node. Es Open Source y multiplataforma. 

Instalar Electron
    npm i -D electron@latest 

Dependencia para crear instalables
    npm install --save-dev electron-builder */
const { app, BrowserWindow } = require('electron');

let appWindow;

function crearVentana() {
    appWindow = new BrowserWindow({
        width: 1400,
        height: 800,
        // resizable: false,
        minWidth: 800,
        minHeight: 600,
        center: true,
        show: false,
        icon: 'icon.png',
    });

    appWindow.on('closed', () => appWindow = null);
    appWindow.loadFile('./index.html');
    appWindow.once('ready-to-show', () => appWindow.show());
}

app.on('ready', crearVentana);