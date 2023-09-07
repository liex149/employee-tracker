DROP DATABASE IF EXISTS company_db;

-- Create new databases --
CREATE DATABASE company_db;

-- use company_db and makes it so all of the following cose will affect comapny_db--
USE company_db;

-- Created tables within company_db --
CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(30)
);

CREATE TABLE employee_role (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    employee_title VARCHAR(30),
    employee_salary DECIMAL, 
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
   
);

CREATE TABLE employee (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES employee_role(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON UPDATE CASCADE
    ON DELETE SET NULL
);

