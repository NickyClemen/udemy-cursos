const Viaje = require('../models/Viajes');

exports.mostrarViajes = async (request, response) => {
    const viajes = await Viaje.findAll();
    response.render('viajes', {
        página: 'Próximos viajes',
        viajes,
    });
}

exports.mostrarViaje = async (request, response) => {
    const viaje = await Viaje.findByPk(request.params.id);
    response.render('viaje', {
        viaje,
    });
}