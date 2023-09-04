-- SELECT *
-- FROM employee_role
-- JOIN department on employee_role.department_id = department.id;

SELECT dept_name
FROM employee_role
JOIN department on employee_role.department_id = department.id;