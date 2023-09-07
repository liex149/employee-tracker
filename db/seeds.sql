INSERT INTO department (dept_name) 
VALUES ('Engineering'),
       ('Finance'),
       ('Legal'),
       ('Sales');

INSERT INTO employee_role (employee_title, employee_salary, department_id)
VALUES ('Sales Lead', 100000, 4),
       ('Sales Person', 80000, 4),
       ('Lead Engineering', 150000, 1),
       ('Software Engineer', 100000, 1),
       ('Account Manager', 200000, 2),
       ('Accountant', 125000, 2),
       ('Legal Team Lead',250000,3),
       ('Laywer', 190000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, NULL),
       ('Mike', 'Chen', 2, 1),
       ('Ashley', 'Rodriguez', 3, NULL),
       ('Kevin', 'Smith', 4, 3),
       ('Kunal', 'Singh', 5, NULL),
       ('Mary', 'Brown', 6, 5),
       ('Sarah', 'Loud', 7, NULL),
       ('Tom', 'Allen', 8, 7);
