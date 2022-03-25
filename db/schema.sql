DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary INT NOT NULL,
  department_id INT unsigned NOT NULL ,
  INDEX dep_id(department_id),
  CONSTRAINT fk_department FOREIGN KEY(department_id) REFERENCES department(id)
);

CREATE TABLE employees (
  
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT unsigned NOT NULL ,
  INDEX roleindex_id(role_id),
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id),
  manager_id INT unsigned, 
  INDEX mang_id(manager_id),
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(id)
);