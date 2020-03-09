let personas = new Set(['Nicole', 'Cirilla', 'Ivan']);

personas.forEach(function(valor, llave, setOriginal) {

    console.log(valor, llave, setOriginal);

    console.log(personas === setOriginal);

});