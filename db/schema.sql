CREATE TABLE alldepartments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(15) NOT NULL
    );

CREATE TABLE allroles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary INTEGER NOT NULL
    );