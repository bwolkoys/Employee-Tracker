## Description 
This is a CLI application to help manage the employee database of a company. It allows you to view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role. The goal of this application is to help organize and plan a business. 

## USER STORY

- AS A business owner
- I WANT to be able to view and manage the departments, roles, and employees in my company
- SO THAT I can organize and plan my business

## ACCEPETANCE CRITERIA

- GIVEN a command-line application that accepts user input
- WHEN I start the application
- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- WHEN I choose to view all departments
- THEN I am presented with a formatted table showing department names and department ids
- WHEN I choose to view all roles
- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- WHEN I choose to view all employees
- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- WHEN I choose to add a department
- THEN I am prompted to enter the name of the department and that department is added to the database
- WHEN I choose to add a role
- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
- WHEN I choose to add an employee
- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
- WHEN I choose to update an employee role
- THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## RESOURCES

- inquirer.prompt: https://www.npmjs.com/package/inquirer 
- switch (answers.action): https://stackoverflow.com/questions/74075310/how-to-properly-nest-inquirer-prompts 
    - https://www.w3schools.com/js/js_switch.asp 
- 23-Ins_Parameterized-Queries: connection pool
- installing mysql: https://stackoverflow.com/questions/18134411/cannot-find-module-mysql-node-js (realized I don't need this)

## Troubleshooting
- Work got busy and I didn't have enough time to fix "add an employee", "update an employee", and "exit" when in the CLI. For "add an employee" I'm getting a .then error and for "update an employee" and "exit" nothing is popping up below, not showing any errors in the CLI. 

## Link to Video Demo