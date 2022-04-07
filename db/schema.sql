DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(30),
   salary DECIMAL,
   department_id INT,
   PRIMARY KEY (id)
);
