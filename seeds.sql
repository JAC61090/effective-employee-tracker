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
VALUES ("Sales Lead", 34000, 1);
INSERT into role (title, salary, department_id)
VALUES ("Salesperson", 29000, 1);
INSERT into role (title, salary, department_id)
VALUES ("Lead Engineer", 45000, 2);
INSERT into role (title, salary, department_id)
VALUES ("Accountant", 5200, 3);
INSERT into role (title, salary, department_id)
VALUES ("Legal", 55000, 4);
INSERT into role (title, salary, department_id)
VALUES ("Manager", 65000, 5);

select * from role;

INSERT into employee (first_name, last_name, role_id)
values ("Steve", "Colt", 1); 
INSERT into employee (first_name, last_name, role_id)
values ("Marco", "Kane", 2); 
INSERT into employee (first_name, last_name, role_id)
values ("Hank", "Ghille", 3); 
INSERT into employee (first_name, last_name, role_id)
values ("Jesk", "Hightower", 4);
INSERT into employee (first_name, last_name, role_id)
values ("Greg", "Gribble", 4);
INSERT into employee (first_name, last_name, role_id)
values ("Richard", "Jackson", 5);
INSERT into employee (first_name, last_name, role_id)
values ("Dwayne", "Green", 6);
INSERT into employee (first_name, last_name, role_id)
values ("Hannibal", "Collins", 7);
INSERT into employee (first_name, last_name, role_id)
values ("Tim", "Murdock", 8);

select * from employee;