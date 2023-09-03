INSERT INTO department (employee_name) 
VALUES ('Restaurant'), 
       ('Finance'),
       ('Marketing');

INSERT INTO employee_role (employee_title, employee_salary, department_id)
VALUES ('Head Chef', 80000, 1),
       ('Sous Chef', 60000, 2),
       ('Dishwasher', 40000, 3),
       ('Accountant', 100000, 1),
       ('Manager', 50000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mary', 'Lou',  1, 123), 
       ('Larry', 'Lund', 2, 4156),
       ('Gary', 'Grover', 3, 8479),
       ('Harry', 'Styles', 4, 180),
       ('Berry', 'Manilow', 5, 1680);