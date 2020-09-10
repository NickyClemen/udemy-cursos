USE test;

CREATE TABLE usuarios(
    id_usuario INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    username VARCHAR(45) NOT NULL,
    password VARCHAR(128) NOT NULL
);

CREATE TABLE rol(
    id_rol INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(45) NOT NULL,
    id_usuario INT NOT NULL,
    id_rol_usuario INT,
    FOREIGN KEY (id_rol_usuario) REFERENCES usuarios (id_usuario)
);

INSERT INTO usuarios(id_usuario, username, password) VALUE (1, 'admin', 123);
INSERT INTO usuarios(id_usuario, username, password) VALUE (2, 'user', 123);

INSERT INTO rol(id_usuario, nombre, id_rol_usuario) VALUE (1, 'ROLE_ADMIN', 1);
INSERT INTO rol(id_usuario, nombre, id_rol_usuario) VALUE (2, 'ROLE_USER', 1);
INSERT INTO rol(id_usuario, nombre, id_rol_usuario) VALUE (3, 'ROLE_USER', 2);

UPDATE usuarios SET password = '$2a$10$KiOsv5V/JXbD08YmQ0sOp.pow/rNtc0sp7TXKvQhk6/k9YBkYSu52' WHERE id_usuario=1;
UPDATE usuarios SET password = '$2a$10$JjVPN0iyMUWTMcfLgMnUx.8DkMbbr5.hu4jxaFhmsVEI.HifjxqeW' WHERE id_usuario=2;