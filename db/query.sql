USE employees_db;

SELECT roles.id, role_name, department_name, salary
FROM roles
LEFT JOIN departments ON roles.department_id = department.id;

#-- SELECT output (what I want to see) 
#--LEFT JOIN connector (where we pull from) ON (value must equal (=) value)


SELECT employees.id, employees.first_name, employees.last_name, role_name, salary, department_name, CONCAT(M.first_name, ' ', M.last_name) Manager
FROM employees
LEFT JOIN roles ON employees.role_id = roles.id
LEFT JOIN departments ON roles.department_id = departments.id
LEFT JOIN employees M ON employees.id = M.manager_id