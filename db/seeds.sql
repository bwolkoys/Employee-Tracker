-- pre-populated databases -- 
-- department --
INSERT INTO department (names)
VALUES
    ('Sales'),
    ('Marketing'),
    ('Human Resources'),
    ('Operations'),
    ('Servicing'),
    ('Retail'),
    ('Correspondence');

-- roles --
INSERT INTO roles (title, department_id, salary)
VALUES 
    ('Salesman', 1, 95000),
    ('Marketing Manager', 2, 100000),
    ('HR Manager', 3, 110000),
    ('Chief Ops Officer', 4, 195000),
    ('VP of Servicing', 5, 175000),
    ('VP of Retail', 6, 150000),
    ('Correspondent AE', 7, 200000);

--employees--
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 101, 10001),
    ('Kate', 'Smith', 201, 20002),
    ('Megan', 'Deats', 301, 30003),
    ('Nicole', 'McCarthy', 401, 40004),
    ('Riley', 'Burke', 501, 50005),
    ('Courtney', 'Kelly', 601, 60006),
    ('Mia', 'Rodgers', 701, 70007);
    