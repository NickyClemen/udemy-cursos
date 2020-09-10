const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Crea la estructura en la base de datos.

const pacientesSchema = new Schema({
    nombre: {
        type: String,
        trim: true, // Si colocan espacios.
    },
    propietario: {
        type: String,
        trim: true,
    },
    telefono: {
        type: String,
        trim: true,
    },
    fecha: {
        type: String,
        trim: true,
    },
    hora: {
        type: String,
        trim: true,
    },
    sintomas: {
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model('Paciente', pacientesSchema); // Exporta el modelo para que esté disponible.
// Moongose tiene una sola instancia.
