const express = require('express');
const pacienteControlller = require('../controllers/pacienteControllers');

const router = express.Router();

module.exports = function() {
    router.post('/pacientes', pacienteControlller.nuevoCliente);
    router.get('/pacientes', pacienteControlller.obtenerPacientes);
    router.get('/pacientes/:id', pacienteControlller.obtenerPaciente);
    router.put('/pacientes/:id', pacienteControlller.actualizarPaciente);
    router.delete('/pacientes/:id', pacienteControlller.eliminarPaciente);

    return router;
}