const express = require('express');
const router = express.Router();

const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function() {
    router.get('/', homeController.consultasHome
        /* response.render('index', {
            clase: 'home'
        }); send es para mostrar algo en la pantalla.
        Hay otro llamado render, que se utiliza para renderizar las vistas. */
        /* Request es lo que le manda al servidor.
        Response es la respuesta. */
    ); /* use. Responde a todos los verbos de HTTP.
    get hace lo mismo que use. get responde a get nada más. */
    
    router.get('/nosotros', nosotrosController.infoNosotros); /* Permite agregar routing. */
    router.get('/viajes', viajesController.mostrarViajes);
    router.get('/viajes/:id', viajesController.mostrarViaje);
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    
    router.post('/testimoniales', testimonialesController.agregarTestimonial) // Exportar.

    return router;
}

/* Template engines: Cargar archivos estáticos.
Instalar pug: npm install pug */