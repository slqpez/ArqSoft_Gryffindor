CREATE DATABASE masal;

 --Tabla de usuarios para autenticación
USE masal;
CREATE TABLE users(
    id INT(11) NOT NULL,
    userName VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullName VARCHAR(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY(id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =2;

USE masal;
DESCRIBE users;

--Tabla de vehículos
USE masal;
CREATE TABLE vehicles(
    id INT(11) NOT NULL,
    nameDriver VARCHAR(100) NOT NULL,
    vehiclePlate VARCHAR(8) NOT NULL,
    phone VARCHAR(12) NOT NULL,
    description TEXT,
    user_id INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE vehicles
    ADD PRIMARY KEY (id);

ALTER TABLE vehicles
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =2;


ALTER TABLE users
  ADD rol enum("admin","user","driver");

USE masal;
DESCRIBE users vehicles;