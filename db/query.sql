

-- SELECT A.id, A.employee_title, A.employee_salary, B.dept_name
-- FROM employee_role A
-- JOIN department B on A.department_id = B.id;

SELECT A.id, A.first_name, A.last_name, employee_role.employee_title, B.first_name as manager, employee_role.employee_salary, department.dept_name
FROM employee A
JOIN employee_role on A.role_id = employee_role.id
LEFT JOIN employee B on A.manager_id = B.id
JOIN department on employee_role.department_id = department.id;