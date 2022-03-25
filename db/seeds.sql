USE employees;

INSERT INTO department 
  (name)
VALUES 
    ("Sales"),
    ("Marketing"),
    ("Finance"),
    ("Legal"),
    ("Engineering");

INSERT INTO role 
  
  (title, salary, department_id)
VALUES 
    ("Sales Lead", 100000, 1),
    ("Marketing Lead", 1200000, 2),
    ("Accounting Manager", 1600000, 3),
    ("Legal Team Lead", 2500000, 4),
    ("Lawyer", 190000, 4),
    ("Lead Developer", 2000000, 5),
    ("Junior Developer", 9000000, 5);


INSERT INTO employees

(first_name, last_name, role_id, manager_id)
VALUES 
    ("Natash", "Romanoff", 1, NULL),
    ("Clinton", "Barton", 2, NULL),
    ("Steven", "Rogers", 1, NULL),
    ("Jennifer", "Walter", 1, NULL),
    ("Matthew", "Murdock", 2, NULL),
    ("Anthony", "Stark", 5, NULL),
    ("Peter", "Parker", 5, 1);
