INSERT INTO department (dept_name) 
VALUES ('Sales'), 
       ('Engineering'),
       ('Finance'),
       ('Leagal');

INSERT INTO employee_role (employee_title, employee_salary, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Lead Engineering', 15000, 2),
       ('Accountant', 125000, 3),
       ('Laywer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mary', 'Lou',  1, 2), 
       ('Larry', 'Lund', 2, NULL),
       ('Gary', 'Grover', 3, 1),
       ('Harry', 'Styles', 4, NULL),
       ('Berry', 'Manilow', 5, 4);