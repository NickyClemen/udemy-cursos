CREATE DATABASE test;

use test;

CREATE TABLE persona(
    id_persona INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    telefono VARCHAR(12) NOT NULL
);

INSERT INTO persona(id_persona, nombre, apellido, email, telefono) VALUE (1, 'Nicole', 'Ordoqui', 'nicole.ordoqui@gmail.com', '1170002448');
INSERT INTO persona(id_persona, nombre, apellido, email, telefono) VALUE (2, 'Cirilla', 'Rusch', 'cirilla.rusch@gmail.com', '1170002448');
INSERT INTO persona(id_persona, nombre, apellido, email, telefono) VALUE (3, 'Ivan', 'Rusch', 'elotroidioma@gmail.com', '1141814154');

SELECT * FROM persona;