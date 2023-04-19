create database AI;
use AI;

CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nombre VARCHAR(255),
  estado VARCHAR(255),
  creditos INT
);

INSERT INTO usuarios (id, nombre, estado, creditos)
VALUES
(1, 'John', 'California', 1500),
(2, 'Jane', 'Texas', 2000),
(3, 'Mike', 'California', 800),
(4, 'Lisa', 'Florida', 500),
(5, 'David', 'California', 1200),
(6, 'Sarah', 'New York', 3000),
(7, 'Chris', 'California', 900);

