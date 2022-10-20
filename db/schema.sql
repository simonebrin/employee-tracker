DROP DATABASE IF EXISTS employeetracker;
CREATE DATABASE employeetracker;
USE employeetracker;

-- DROP TABLE IF EXISTS employees;
-- DROP TABLE IF EXISTS roles;
-- DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
    );

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER, 
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE
    );


CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    roles_id INTEGER,
    FOREIGN KEY (roles_id) REFERENCES roles(id) ON DELETE CASCADE,
    manager_id INTEGER NULL,
    FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);



    -- allemployeesID INTEGER NOT NULL,
    -- PRIMARY KEY (allemployeesID),
    -- FOREIGN KEY (allrolesID) REFERENCES allroles(allrolesID)
    -- CONSTRAINT fk_allroles FOREIGN KEY (allroles_id) REFERENCES allroles(allroles_id)
    -- FOREIGN KEY (allroles_id) REFERENCES allroles(allroles_id)
    -- allroles_id INTEGER,
    -- CONSTRAINT fk_allroles FOREIGN KEY (allroles_id) REFERENCES allroles(allroles_id) ON DELETE SET NULL