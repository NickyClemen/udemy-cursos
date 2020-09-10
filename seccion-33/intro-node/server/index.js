/* Instalar dependencias productivas
    npm install nodemon body-parser express

En public, van las hojas de estilo, las imágenes o librerías de JS (archivos estáticos).
En server, van los modelos, rutas, archivos de configuración y las vistas. 
Node hace la importación por módulos con require y module.exports. 
Para matar un puerto: fuser -n tcp -k 3000 
Instalar Sequelize y MySQL: npm install mysql2 sequelize*/
const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');
const configs = require('./config');
const db = require('./config/database.js');

require('dotenv').config({ path: 'variables.env' });

db.authenticate()
    .then(() => console.log('DB conectada'))
    .catch(error => console.log(error.message));

const app = express(); // Inicializa el sevidor.

app.set('view engine', 'pug'); // Habilita el templete engine.
app.set('views', path.join(__dirname, './views')); // Añade las vistas.

app.use(express.static('public')); // Cargar carpetas estáticas.

// Validar si está en DEV o PROD.
const config = configs[app.get('env')];
/* env es una variable de Node para filtrar el ambiente. */
app.locals.titulo = config.nombresitio;

app.use((request, response, next) => {
    const date = new Date();
    response.locals.fechaActual = date.getFullYear();
    response.locals.ruta = request.path;

    return next(); // Para pasar a la siguiente función. Middleware.
}); // Muestra el año.
/* Para poder mostrarlo, se recomienda el uso de locals: Variables locales y pasa por los diferentes
archivos (variables internas de Node). */

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes());

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => console.log('El servidor está funcionando.')); // Puerto.