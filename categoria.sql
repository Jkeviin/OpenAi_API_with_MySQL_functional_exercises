drop database if exists AI2;
create database AI2;
 use AI2;

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  producto VARCHAR(255) NOT NULL,
  categoria VARCHAR(255) NOT NULL
);

INSERT INTO productos (producto, categoria) VALUES
  ('Apple', 'Electrónica'),
  ('Facebook', 'Redes sociales'),
  ('Fedex', 'Envíos');


select * from productos;