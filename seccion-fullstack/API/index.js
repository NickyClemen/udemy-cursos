/* npm install express mongoose
npm install --save-dev nodemon */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routers');
const server = express();
// const whiteList = ['http://localhost:3000'];

/* const corsOptions = {
    origin: (origin, callback) => {
        const existe = whiteList.some(dominio => dominio === origin);

        if(existe) {
            callback(null, true);
        } else {
            callback(new Error('Acceso denegado.'));
        }
    }
} */

server.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
}); // Si corre en localhost.

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/', routes());

// Puerto y arrancar servidor.
server.listen(4000, () => console.log('Servidor andando.'));