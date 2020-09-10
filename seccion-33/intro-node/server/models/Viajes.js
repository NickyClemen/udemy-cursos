/* Se recomienda que los modelos sean con la primera letra mayúscula. */
const Sequelize = require('sequelize');

const db = require('../config/database');

const Viaje = db.define('viaje', 
    {
        titulo: {
            type: Sequelize.STRING
        },
        precio: {
            type: Sequelize.STRING
        },
        fecha_ida: {
            type: Sequelize.DATE
        },
        fecha_vuelta: {
            type: Sequelize.DATE
        },
        imagen: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        },
        disponibles: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
); /* En los models, hay que poner todos los campos de la database. */

module.exports = Viaje;