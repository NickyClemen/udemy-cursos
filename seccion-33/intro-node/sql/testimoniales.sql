use agencia;

CREATE TABLE testimoniales(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(60) NOT NULL,
    correo VARCHAR(60) NOT NULL,
    mensaje LONGTEXT NOT NULL
);

SELECT * from testimoniales;

