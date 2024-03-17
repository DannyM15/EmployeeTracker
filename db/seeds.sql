INSERT INTO departments (department_name)
VALUES (Sales),
       (Legal),
       (Finance),
       (R&D);


INSERT INTO roles (role_name, department, salary)
VALUES (Sales Lead, Sales, 75000),
       (Salesperson, Sales, 52000),
       (Scientist l, R&D, 75000),
       (Scientist ll, R&D, 95000),
       (Lawyer, Legal, 200000),
       (Legal Aid, Legal, 95000)
       (Accountant, Finance, 210000),
       (Accounting Assistant, Finance, 80000);

INSERT INTO employees( first_name, last_name, title, department, salary, manager)
VALUES (Emma, Smith, Scientist l, R&D, 75000, Noah Johnson),
       (Noah, Johnson, Scientist ll, R&D, 95000),
       (Olivia, Williams, Accountant, Finance, 210000),
       (Liam, Jones, Accounting Assistant, Finance, 80000),
       (Ava, Brown, Sales Lead, Sales, 75000),
       (WIlliam, Davis, Salesperson, Sales, 52000, Ava Brown),
       (Sophia, Miller, Legal Aid, Legal, 95000, James Wilson),
       (James, Wilson, Lawyer, Legal, 200000);
