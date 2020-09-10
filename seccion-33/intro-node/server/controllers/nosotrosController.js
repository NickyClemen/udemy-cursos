exports.infoNosotros = (request, response) => {
    response.render('nosotros', { 
        pagina: 'Sobre nosotros' // Se pueden pasar datos a las views en el routing.
    });
}