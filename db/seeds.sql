INSERT INTO departments (department_name)
VALUES ('Sales'),
       ('Legal'),
       ('Finance'),
       ('R&D');

INSERT INTO roles (role_name, department_id, salary)
VALUES ('Sales Lead', 1, 75000),
       ('Salesperson', 1, 52000),
       ('Scientist l', 4, 75000),
       ('Scientist ll', 4, 95000),
       ('Lawyer', 2, 200000),
       ('Legal Aid', 2, 95000),
       ('Accountant', 3, 210000),
       ('Accounting Assistant', 3, 80000);

INSERT INTO employees( first_name, last_name, role_id)
VALUES ('Emma', 'Smith', 3), 
       ('Noah', 'Johnson', 4),
       ('Olivia', 'Williams', 7),
       ('Liam', 'Jones', 8), 
       ('Ava', 'Brown', 1), 
       ('WIlliam', 'Davis', 2),
       ('Sophia', 'Miller', 5),
       ('James', 'Wilson', 6); 

UPDATE employees SET manager_id = 1 WHERE ID = 2;
UPDATE employees SET manager_id = 3 WHERE ID = 4;
UPDATE employees SET manager_id = 5 WHERE ID = 6;
UPDATE employees SET manager_id = 8 WHERE ID = 7;



