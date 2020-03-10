-- database filler

USE employee_db;

INSERT INTO department (department)
VALUES ("HR");

INSERT INTO department (department)
VALUES ("Business Office");

INSERT INTO department (department)
VALUES ("Nursing");

INSERT INTO department (department)
VALUES ("Therapy");

INSERT INTO role (title, salary, department_id)
VALUES ("HR Director", 50000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("BOM", 60000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("ABOM", 30000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("DON", 80000.00, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("ADON", 60000.00, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("DOR", 80000.00, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Therapist", 70000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Janet", "Grinch", 1, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Betty", "Fuentes", 2, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kim", "Otter", 3, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Linda", "Apple", 4, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Vikki", "Tanner", 5, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kelly", "Daniels", 6, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Scott", "Rogers", 7, 6);
