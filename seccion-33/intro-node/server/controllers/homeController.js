const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.consultasHome = async (request, response) => {
    const viajes = await Viaje.findAll({ limit: 3 });
    const testimoniales = await Testimonial.findAll({ limit: 3 });

    response.render('index', {
        página: 'Próximos viajes',
        clase: 'home',
        viajes,
        testimoniales,
    });    
}