const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (request, response) => {
    const testimoniales = await Testimonial.findAll();
    response.render('testimoniales', { 
        pagina: 'Testimoniales',
        testimoniales
    });
}

exports.agregarTestimonial = async (request, response) => {
    let { nombre, correo, mensaje } = request.body;
    let errores = [];

    if(!nombre) {
        errores.push({ 'mensaje': 'Agregá tu nombre.' });
    } else if(!correo) {
        errores.push({ 'mensaje': 'Agregá tu email.' });
    } else if(!mensaje) {
        errores.push({ 'mensaje': 'Agregá un mensaje.' });
    }

    if(errores.length > 0) {
        const testimoniales = await Testimonial.findAll();
        response.render('testimoniales', { 
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testimoniales',
            testimoniales,
        });
    } else {
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => response.redirect('/testimoniales'))
        .catch(reject => console.log(reject.message));
    }   
}


