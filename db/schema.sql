-- Create new databases --
CREATE DATABASE company_db;

-- use company_db and makes it so all of the following cose will affect comapny_db--
USE company_db;

-- Created tables within company_db --
CREATE TABLE department (
    id INIT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
     id INIT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL, 
    department_id INT
);

CREATE TABLE employee(
    id INIT PRIMARY KEY,
    first_name VARCHAR(30),
    lasr_name VARCHAR(30),
    role_id INT,
    manager_id INT NOT NULL
);
