DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS department;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
    );

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER,
    );


CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    roles_id INTEGER
    manager_id INTEGER NULL,
);

SELECT *
FROM roles
INNER JOIN employees ON roles.roles_id=employees.employees_id;

    -- allemployeesID INTEGER NOT NULL,
    -- PRIMARY KEY (allemployeesID),
    -- FOREIGN KEY (allrolesID) REFERENCES allroles(allrolesID)
    -- CONSTRAINT fk_allroles FOREIGN KEY (allroles_id) REFERENCES allroles(allroles_id)
    -- FOREIGN KEY (allroles_id) REFERENCES allroles(allroles_id)
    -- allroles_id INTEGER,
    -- CONSTRAINT fk_allroles FOREIGN KEY (allroles_id) REFERENCES allroles(allroles_id) ON DELETE SET NULL