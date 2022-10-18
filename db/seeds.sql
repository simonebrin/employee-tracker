INSERT INTO alldepartments (department_name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO allroles (title, department, salary)
VALUES
('Sales Lead', 'Sales', 10000),
('Salesperson', 'Sales', 8000),
('Lead Engineer', 'Engineering', 150000),
('Software Engineer', 'Engineering', 120000),
('Account Manager', 'Finance', 160000),
('Accountant', 'Finance', 125000),
('Legal Team Lead', 'Legal', 250000),
('Lawyer', 'Legal', 190000);

INSERT INTO allemployees (first_name, last_name, manager)
VALUES
('John', 'Doe', NULL),
('Mike', 'Chan', 'John Doe'),
('Ashley', 'Rodriguez', NULL),
('Kevin', 'Tupik', 'Ashley Rodriguez'),
('Kunal', 'Singh', NULL),
('Malia', 'Brown', 'Kunal Singh'),
('Sarah', 'Lourd', NULL),
('Tom', 'Allen', 'Sarah Lourd');