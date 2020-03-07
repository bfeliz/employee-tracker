-- database filler

USE employee_db;

INSERT INTO department (department)
VALUES ("hr");

INSERT INTO department (department)
VALUES ("business_office");

INSERT INTO department (department)
VALUES ("nursing");

INSERT INTO department (department)
VALUES ("therapy");

INSERT INTO role (title, salary, department_id)
VALUES ("hr director", 50000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("bom", 60000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("abom", 30000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("don", 80000.00, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("adon", 60000.00, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("dor", 80000.00, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("therapist", 70000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("janet", "grinch", 1, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("betty", "fuentes", 2, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("kim", "otter", 3, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("linda", "apple", 4, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("vikki", "tanner", 5, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("kelly", "daniels", 6, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("scott", "rogers", 7, 6);
