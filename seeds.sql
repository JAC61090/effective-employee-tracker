select * from employee;
select * from role;
select * from department;

INSERT into department (name)
VALUES ("Sales");
INSERT into department (name)
VALUES ("Engineering");
INSERT into department (name)
VALUES ("Finance");
INSERT into department (name)
VALUES ("Legal");
INSERT into department (name)
VALUES ("Manager");

select * from department;

INSERT into role (title, salary, department_id)
VALUES ("Sales Lead", 33000, 1);
INSERT into role (title, salary, department_id)
VALUES ("Salesperson", 28000, 1);
INSERT into role (title, salary, department_id)
VALUES ("Lead Engineer", 47000 2);
INSERT into role (title, salary, department_id)
VALUES ("Accountant", 52500, 3);
INSERT into role (title, salary, department_id)
VALUES ("Legal", 51000, 4);
INSERT into role (title, salary, department_id)
VALUES ("Manager", 65000, 5);